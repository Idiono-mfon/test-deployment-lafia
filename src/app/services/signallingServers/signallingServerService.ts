import { Server, Socket } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import Redis from 'ioredis';
import { Env } from '../../config/env';
import { forWho } from '../../utils';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { TwilioService } from '../twilio';
import {
  IAcceptCare,
  INewBroadcast,
  INewCare,
  IOnlineUser
} from './interfaces';
import { RedisStore } from './redisStore';

const env = Env.all();

const pubClient = new Redis({
  port: env.redis_port,
  host: env.redis_host,
  password: env.redis_password,
});
const subClient = pubClient.duplicate();


/*
 * These are all the client side addresses
 * allowed through cors for socket.io communication
 *
 * Note: http://localhost:3000 address is only
 * used for development.
 */
// const corsAllowedOriginsForSocketIO = [
//   'http://localhost:3000',
//   'http://sonalysis-frontend.s3.amazonaws.com',
//   'http://sonalysis-frontend.s3-website-us-east-1.amazonaws.com'
// ];

export class SignallingServerService {
  private readonly io: any;
  private static redisStore: RedisStore;
  private static onlinePractitionerRoom: string;
  private static twilioService: any;

  constructor(appServer: any, patientService: PatientService, practitionerService: PractitionerService) {
    SignallingServerService.redisStore = new RedisStore(pubClient, patientService, practitionerService);
    SignallingServerService.onlinePractitionerRoom = 'onlinePractitioners';
    SignallingServerService.twilioService = new TwilioService();

    this.io = new Server(appServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
      },
      allowEIO3: true
    });

    this.io.adapter(createAdapter({ pubClient, subClient }));
  }

  public initialize(): void {
    this.io.on('connection', async (socket: Socket) => {
      await SignallingServerService.listenForConnectionEvent(socket);
      SignallingServerService.listenForNewVideoBroadcastEvent(socket);
      SignallingServerService.listenForAcceptCareEvent(socket);
      SignallingServerService.listenForIceCandidateEvent(socket);
      SignallingServerService.listenForPatientOnlineStatusEvent(socket);
      SignallingServerService.listenForCallUserEvent(socket);
      SignallingServerService.listenForMakeAnswerEvent(socket);
      SignallingServerService.listenForDisconnectEvent(socket);
    });
  }

  private static async listenForConnectionEvent(socket: Socket) {
    let { userId, resourceType } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType.toLowerCase();
    const user: IOnlineUser = {
      userId,
      resourceType,
      socketId: socket.id
    } as IOnlineUser;

    await SignallingServerService.redisStore.saveOnlineUser(user);

    console.log('ConnectedUser:', user);

    if (user.resourceType === forWho.practitioner) {
      socket.join(SignallingServerService.onlinePractitionerRoom);
    }

    await SignallingServerService.emitOnlinePractitionersEvent(socket);
  }

  private static async emitOnlinePractitionersEvent(socket: Socket) {
    const onlineUsers = await SignallingServerService.redisStore.getOnlineUsers();
    let onlinePractitioners = [];

    for (let user of onlineUsers) {
      if (user.resourceType === forWho.practitioner) {
        onlinePractitioners.push(user);
      }
    }

    socket.to('onlineUsers').emit('onlinePractitioners', onlinePractitioners);
  }

  private static listenForNewVideoBroadcastEvent(socket: Socket) {
    socket.on('newVideoBroadcast', async (newBroadcast: INewBroadcast) => {
      await SignallingServerService.redisStore.saveBroadcast(newBroadcast);
      const {
        patientId,
        videoUrl,
        initiateCare,
        patientName
      } = await this.redisStore
        .getBroadcastByVideoUrl(newBroadcast.videoUrl);

      const newCareBroadCast = {
        patientId,
        initiateCare,
        videoUrl,
        patientName
      };

      SignallingServerService.emitNewCareEvent(socket, newCareBroadCast);
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
        return cb({
          status: false,
          description: 'Care already initiated by another practitioner'
        });
      }

      await SignallingServerService.redisStore.updateBroadcast(acceptCare);

      const roomId = await TwilioService.createRoom();
      const token = await SignallingServerService.twilioService.generateAccessToken(
        acceptCare?.practitionerId as string,
        roomId
      );
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

      return cb({
        status: 'online',
        patientSocketId: userData?.socketId,
      });
    });
  }

  private static listenForCallUserEvent(socket: Socket) {
    socket.on('callUser', data => {
      SignallingServerService.emitCallMadeEvent(socket, data);
    });
  }

  private static emitCallMadeEvent(socket: Socket, data: any) {
    const token = SignallingServerService
      .twilioService
      .generateAccessToken(
        data.patientId,
        data.roomId
      );

    socket.to(data.to).emit('callMade', {
      roomId: data.roomId,
      token,
      practitionerName: data.practitionerName,
      socket: socket.id,
    });
  }

  private static listenForMakeAnswerEvent(socket: Socket) {
    socket.on('makeAnswer', data => {
      SignallingServerService.emitAnswerMadeEvent(socket, data);
    });
  }

  private static emitAnswerMadeEvent(socket: Socket, data: any) {
    socket.to(data.to).emit('answerMade', {
      socket: socket.id,
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
      socket: socket.id,
    });
  }

  private static listenForDisconnectEvent(socket: Socket) {
    let { userId, resourceType } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType.toLowerCase();
    const user: IOnlineUser = { userId, resourceType } as IOnlineUser;

    socket.on('disconnect', async () => {
      await SignallingServerService.redisStore.removeUserBY(user.userId);

      console.log(`User disconnected: ${socket.id}`);

      await SignallingServerService.emitOnlinePractitionersEvent(socket);
    });
  }
}
