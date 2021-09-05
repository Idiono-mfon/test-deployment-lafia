import { inject } from 'inversify';
import { Server, Socket } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { forWho } from '../../utils';
import { MessageBroker, rmqNewBroadcastSuccessResponse } from '../messageBroker';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { VideoBroadcastService } from '../videoRecords';
import { TwilioService } from '../twilio';
import {
  IAcceptCare,
  INewBroadcast,
  INewCare,
  IOnlineUser
} from './interfaces';
import { RedisStore } from './redisStore';
import { IPractitionerVideoBroadcast, IVideoBroadcast } from '../../models';

const env = Env.all();

const pubClient = new Redis({
  port: env.redis_port,
  host: env.redis_host,
  password: env.redis_password,
});
const subClient = pubClient.duplicate();

export class SignallingServerService {
  @inject(TYPES.MessageBroker)
  private readonly messageBroker: MessageBroker;
  private readonly io: any;
  private static redisStore: RedisStore;
  private static onlinePractitionerRoom: string;
  private static twilioService: any;
  private static videoBroadcastService: VideoBroadcastService;

  constructor(
    appServer: any,
    patientService: PatientService,
    practitionerService: PractitionerService,
    videoBroadcastService: VideoBroadcastService,
    messageBroker: MessageBroker
  ) {
    SignallingServerService.redisStore = new RedisStore(pubClient, patientService, practitionerService);
    SignallingServerService.onlinePractitionerRoom = 'onlinePractitioners';
    SignallingServerService.twilioService = new TwilioService();
    SignallingServerService.videoBroadcastService = videoBroadcastService;

    this.io = new Server(appServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
      },
      allowEIO3: true
    });

    this.io.adapter(createAdapter({ pubClient, subClient }));
    this.messageBroker = messageBroker;
  }

  public initialize(): void {
    this.io.on('connection', async (socket: Socket) => {
      await SignallingServerService.listenForConnectionEvent(socket);
      await SignallingServerService.emitOnlinePractitionersEvent(this.io);
      this.listenForNewVideoBroadcastEvent(socket);
      SignallingServerService.listenForAcceptCareEvent(socket);
      SignallingServerService.listenForIceCandidateEvent(socket);
      SignallingServerService.listenForPatientOnlineStatusEvent(socket);
      SignallingServerService.listenForCallUserEvent(socket);
      SignallingServerService.listenForCallEvent(socket);
      SignallingServerService.listenForMakeAnswerEvent(socket);
      SignallingServerService.listenForDisconnectEvent(this.io, socket);
    });
  }

  private static async listenForConnectionEvent(socket: Socket) {
    let { userId, resourceType } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType.toLowerCase();
    const user: IOnlineUser = {
      userId,
      resourceType,
      socketId: socket?.id
    } as IOnlineUser;

    if (user.userId && user.userId !== 'undefined') {
      await SignallingServerService.redisStore.saveOnlineUser(user);
    }

    if (
      user.resourceType === forWho.practitioner &&
      (user.userId && user.userId !== 'undefined')
    ) {
      socket.join(SignallingServerService.onlinePractitionerRoom);
    }
  }

  private static async emitOnlinePractitionersEvent(socket: Socket) {
    const onlineUsers = await SignallingServerService.redisStore.getOnlineUsers();
    let onlinePractitioners = [];

    for (let user of onlineUsers) {
      if (
        user.resourceType === forWho.practitioner &&
        (user.userId && user.userId !== 'undefined')
      ) {
        onlinePractitioners.push(user);
      }
    }

    console.log('OnlinePractitioners:', onlinePractitioners);
    console.log('OnlineUsers:', onlineUsers);

    socket.emit('onlinePractitioners', onlinePractitioners);
  }

  private listenForNewVideoBroadcastEvent(socket: Socket) {
    socket.on('newVideoBroadcast', async (newBroadcast: INewBroadcast) => {
      await SignallingServerService.redisStore.saveBroadcast(newBroadcast);
      const newCareBroadCast = await SignallingServerService.redisStore
        .getBroadcastByVideoUrl(newBroadcast.videoUrl);

      SignallingServerService.emitNewCareEvent(socket, newCareBroadCast);

      const rmqPubMsg = rmqNewBroadcastSuccessResponse(newCareBroadCast, 'New broadcast event emitted successfully');
      console.log('RmqPubMsg:', rmqPubMsg);
      await this.messageBroker.rmqPublish(JSON.stringify(rmqPubMsg));

      if (newCareBroadCast.videoUrl) {
        const vidBroadcast: IVideoBroadcast = {
          patient_id: newCareBroadCast.patientId,
          description: newCareBroadCast.description,
          initiate_care: String(newCareBroadCast.initiateCare),
          video_url: newCareBroadCast.videoUrl
        }

        const persistedBroadcast = await SignallingServerService.videoBroadcastService.saveBroadcastVideo(vidBroadcast);
        console.log('persistedBroadcast {}', persistedBroadcast);
      }
    });
  }

  private static emitNewCareEvent(socket: Socket, newCareBroadcast: INewCare) {
    socket.to(SignallingServerService.onlinePractitionerRoom)
      .emit('newCare', newCareBroadcast);
  }

  private static listenForAcceptCareEvent(socket: Socket) {
    socket.on('acceptCare', async (acceptCare: IAcceptCare, cb) => {
      const existingCare = await SignallingServerService.redisStore.getBroadcastByVideoUrl(acceptCare.videoUrl);

      if (existingCare?.initiateCare) {
        if (existingCare?.practitionerId !== acceptCare?.practitionerId) {
          return cb({
            status: false,
            description: 'Care already initiated by another practitioner'
          });
        }
      }

      await SignallingServerService.redisStore.updateBroadcast(acceptCare);

      const videoBroadcast = await SignallingServerService.videoBroadcastService.getOneVideoRecord({
        patient_id: existingCare.patientId,
        video_url: existingCare.videoUrl
      });

      if (videoBroadcast) {
        const vidId: string = videoBroadcast.id ? videoBroadcast.id : '';
        const data: IPractitionerVideoBroadcast = {
          practitioner_id: acceptCare.practitionerId,
          video_broadcast_id: vidId
        }
        console.log('SavePractitionerVideoBroadcast:', videoBroadcast);
        console.log('PData:', data);
        await SignallingServerService.videoBroadcastService.assignBroadcastVideoToPractitioner(data);
      }


      const defaultRoomName = uuid();
      console.log('DefaultRoom:', defaultRoomName);
      const { token, roomId } = await SignallingServerService.twilioService
        .generateAccessToken(acceptCare?.practitionerId as string, defaultRoomName);
      return cb({
        roomId,
        token,
        status: true,
        description: 'You accepted to give care to the patient'
      });
    });
  }

  private static listenForPatientOnlineStatusEvent(socket: Socket) {
    socket.on('patientOnlineStatus', async (data, cb) => {
      const userData: IOnlineUser = await SignallingServerService
        .redisStore
        .getUserById(data.patientId);

      if (!userData?.socketId) {
        return cb({
          status: 'offline',
          patientSocketId: null,
        });
      }
      await SignallingServerService.emitOnlinePractitionersEvent(socket);

      return cb({
        status: 'online',
        patientSocketId: userData?.socketId,
      });
    });
  }

  private static listenForCallUserEvent(socket: Socket) {
    socket.on('callUser', async (data) => {
      await SignallingServerService.emitCallMadeEvent(socket, data);
    });
  }

  private static async emitCallMadeEvent(socket: Socket, data: any) {
    const { token } = await SignallingServerService
      .twilioService
      .generateAccessToken(
        data.patientId,
        data.roomId
      );

    socket.to(data.to).emit('callMade', {
      roomId: data.roomId,
      token,
      practitionerName: data.practitionerName,
      socket: socket?.id,
    });
  }

  private static listenForCallEvent(socket: Socket) {
    socket.on('call', async (data) => {
      await SignallingServerService.emitCallEvent(socket, data);
    });
  }

  private static async emitCallEvent(socket: Socket, data: any) {
    console.log('Received Data:', data);
    const reciever: IOnlineUser = await SignallingServerService
      .redisStore
      .getUserById(data.reciever);
    const sender: IOnlineUser = await SignallingServerService
      .redisStore
      .getUserById(data.sender);

    const access = data.type === 'connect' ? await SignallingServerService
      .twilioService
      .generateAccessToken(
        data.reciever,
        data.room
      ) : null;

    console.log('Access RoomId:', access?.roomId);
    console.log('Received RoomId:', data?.room);

    const res = {
      room: data.room,
      token: access?.token,
      sender: data.sender,
      reciever: data.reciever,
      senderDetails: sender,
      recieverDetails: reciever,
      type: data.type,
      socket: socket?.id,
    };

    console.log('RES:', res);

    socket
      .to(reciever.socketId)
      .emit('call', res);

    console.log('Calling...');
  }

  private static listenForMakeAnswerEvent(socket: Socket) {
    socket.on('makeAnswer', async data => {
      await SignallingServerService.emitOnlinePractitionersEvent(socket);
      SignallingServerService.emitAnswerMadeEvent(socket, data);
    });
  }

  private static emitAnswerMadeEvent(socket: Socket, data: any) {
    socket.to(data.to).emit('answerMade', {
      socket: socket?.id,
      answer: data.answer,
    });
  }

  private static listenForIceCandidateEvent(socket: Socket) {
    socket.on('iceCandidate', data => {
      SignallingServerService.emitCandidateSharedEvent(socket, data);
    });
  }

  private static emitCandidateSharedEvent(socket: Socket, data: any) {
    socket.to(data.to).emit('candidateShared', {
      candidate: data.candidate,
      socket: socket?.id,
    });
  }

  private static listenForDisconnectEvent(io: Socket, socket: Socket) {
    socket.on('disconnect', async () => {
      let { userId, resourceType } = socket.handshake.query;
      resourceType = resourceType as unknown as string;
      resourceType = resourceType.toLowerCase();
      const user: IOnlineUser = { userId, resourceType } as IOnlineUser;
      console.log(`DisconnectedUser: ${socket?.id}`);
      await SignallingServerService.redisStore.removeUserBYId(user.userId);
      await SignallingServerService.emitOnlinePractitionersEvent(io);

    });
  }
}
