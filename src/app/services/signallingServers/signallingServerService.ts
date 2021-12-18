import Redis from 'ioredis';
import { Server, Socket } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import { v4 as uuid } from 'uuid';
import { Env } from '../../config/env';
import { IPractitionerVideoBroadcast, IVideoBroadcast } from '../../models';
import { forWho, logger } from '../../utils';
import { eventName, eventService } from '../eventEmitter';
import {
  BroadcastData,
  BroadcastNotificationPayload,
  CallNotificationPayload,
  FirebaseService,
} from '../notifications';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { TwilioService } from '../twilio';
import { VideoBroadcastService } from '../videoRecords';
import { IAcceptCare, INewBroadcast, INewCare, IOnlineUser } from './interfaces';
import { RedisStore } from './redisStore';

const env = Env.all();
const { redis_username, redis_host, redis_port, redis_password } = env;

const pubClient = new Redis(
  `rediss://${redis_username}:${redis_password}@${redis_host}:${redis_port}?allowUsernameInURI=true`
);

const subClient = pubClient.duplicate();

export class SignallingServerService {
  private static firebaseService: FirebaseService;
  private readonly io: any;
  private static redisStore: RedisStore;
  private static onlinePractitionerRoom: string;
  private static twilioService: any;
  private static videoBroadcastService: VideoBroadcastService;

  constructor(
    appServer: any,
    patientService: PatientService,
    practitionerService: PractitionerService,
    videoBroadcastService: VideoBroadcastService
  ) {
    SignallingServerService.redisStore = new RedisStore(pubClient, patientService, practitionerService);
    SignallingServerService.onlinePractitionerRoom = 'onlinePractitioners';
    SignallingServerService.twilioService = new TwilioService();
    SignallingServerService.videoBroadcastService = videoBroadcastService;
    SignallingServerService.firebaseService = new FirebaseService();

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
    logger.info('Running SignallingServerService.initialize');
    this.io.on('connection', async (socket: Socket) => {
      await SignallingServerService.listenForConnectionEvent(socket);
      await SignallingServerService.emitOnlinePractitionersEvent(this.io);
      this.listenForNewVideoBroadcastEvent(socket);
      this.listenForConnectionData(socket);
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
    logger.info('Running SignallingServerService.listenForConnectionEvent');
    let { userId, resourceType, deviceToken } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType?.toLowerCase();
    const user: IOnlineUser = {
      userId,
      resourceType,
      socketId: socket?.id,
      deviceToken,
    } as IOnlineUser;

    if (user.userId && user.userId !== 'undefined') {
      await SignallingServerService.redisStore.saveOnlineUser(user);
    }

    SignallingServerService.joinOnlinePractitionerRoom(socket, user);
  }

  private static joinOnlinePractitionerRoom(socket: Socket, user: IOnlineUser) {
    if (
      user.resourceType === forWho.practitioner &&
      (user.userId && user.userId !== 'undefined')
    ) {
      socket.join(SignallingServerService.onlinePractitionerRoom);
    }
  }

  private static async getOnlineUsers() {
    return SignallingServerService.redisStore.getOnlineUsers();
  }

  private static async getOnlinePractitioners(onlineUsers: IOnlineUser[]) {
    let onlinePractitioners = [];

    for (let user of onlineUsers) {
      if (
        user.resourceType === forWho.practitioner &&
        (user.userId && user.userId !== 'undefined')
      ) {
        onlinePractitioners.push(user);
      }
    }

    return onlinePractitioners;
  }

  private static async sendFirebaseNotificationToAllPractitioners(
    eventName: string, data: BroadcastData
  ) {
    const onlineUsers = await SignallingServerService.getOnlineUsers();
    const onlinePractitioners = await SignallingServerService.getOnlinePractitioners(onlineUsers);

    for (let practitioner of onlinePractitioners) {

      const payload: BroadcastNotificationPayload = {
        notificationType: 'broadcast',
        user_name: data.patientName,
        broadcast_data: data
      };

      // Send firebase notification to user's device
      eventService.emit(eventName, practitioner.deviceToken, payload);
    }
  }

  private static async emitOnlinePractitionersEvent(socket: Socket) {
    logger.info('Running SignallingServerService.emitOnlinePractitionersEvent');

    const onlineUsers = await SignallingServerService.getOnlineUsers();
    const onlinePractitioners = await SignallingServerService.getOnlinePractitioners(onlineUsers);

    logger.info(`OnlinePractitioners: ${JSON.stringify(onlinePractitioners)}`);
    logger.info(`OnlineUsers: ${JSON.stringify(onlineUsers)}`);

    socket.emit('onlinePractitioners', onlinePractitioners);
  }

  private listenForNewVideoBroadcastEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForNewVideoBroadcastEvent');
    socket.on('newVideoBroadcast', async (newBroadcast: INewBroadcast) => {
      await SignallingServerService.redisStore.saveBroadcast(newBroadcast);

      const newCareBroadCast = await SignallingServerService.redisStore
        .getBroadcastByVideoUrl(newBroadcast.videoUrl);

      SignallingServerService.emitNewCareEvent(socket, newCareBroadCast);

      // Send kafka message to practitioner
      eventService.emit(eventName.newBroadcast, newCareBroadCast);

      // Send firebase notification to all practitioners
      await SignallingServerService.sendFirebaseNotificationToAllPractitioners(eventName.sendNotification, newCareBroadCast);

      if (newCareBroadCast.videoUrl) {
        const patient: IOnlineUser = await SignallingServerService
          .redisStore
          .getUserById(newCareBroadCast.patientId);

        const vidBroadcast: IVideoBroadcast = {
          patient_name: patient.username,
          patient_id: newCareBroadCast.patientId,
          description: newCareBroadCast.description,
          initiate_care: String(newCareBroadCast.initiateCare),
          video_url: newCareBroadCast.videoUrl
        }

        await SignallingServerService.videoBroadcastService.saveBroadcastVideo(vidBroadcast);
      }
    });
  }

  private listenForConnectionData(socket: Socket) {
    logger.info('Running SignallingServerService.listenForConnectionData');
    socket.on('connectionData', async (connectionData: IOnlineUser) => {
      logger.info(`ConnectionData: ${JSON.stringify(connectionData)}`);

      await SignallingServerService.redisStore.removeUserBySocketId(socket.id);

      const user: IOnlineUser = {
        ...connectionData,
        resourceType: connectionData?.resourceType?.toLowerCase(),
        socketId: socket?.id,
      } as IOnlineUser;

      await SignallingServerService.redisStore.saveOnlineUser(user);

      SignallingServerService.joinOnlinePractitionerRoom(socket, user);

      await SignallingServerService.emitOnlinePractitionersEvent(socket);
    });
  }

  private static emitNewCareEvent(socket: Socket, newCareBroadcast: INewCare) {
    logger.info('Running SignallingServerService.emitNewCareEvent');
    socket.to(SignallingServerService.onlinePractitionerRoom)
      .emit('newCare', newCareBroadcast);
  }

  private static listenForAcceptCareEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForAcceptCareEvent');
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

        await SignallingServerService.videoBroadcastService.assignBroadcastVideoToPractitioner(data);
      }


      const defaultRoomName = uuid();
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
    logger.info('Running SignallingServerService.listenForPatientOnlineStatusEvent');
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
    logger.info('Running SignallingServerService.listenForCallUserEvent');
    socket.on('callUser', async (data) => {
      await SignallingServerService.emitCallMadeEvent(socket, data);
    });
  }

  private static async emitCallMadeEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitCallMadeEvent');
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
    logger.info('Running SignallingServerService.listenForCallEvent');
    socket.on('call', async (data) => {
      await SignallingServerService.emitCallEvent(socket, data);
    });
  }

  private static async emitCallEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitCallEvent');
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

    logger.info(`EmitCallEvent Data: ${JSON.stringify(res)}`);

    const payload: CallNotificationPayload = {
      user_image: reciever.userImage as string,
      user_name: reciever.username as string,
      notificationType: 'call',
      call_data: res
    };

    // Send firebase notification to user's device
    eventService.emit(eventName.sendNotification, reciever.deviceToken, payload);

    // Send call event and data to the reciever
    socket
      .to(reciever.socketId)
      .emit('call', res);
  }

  private static listenForMakeAnswerEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForMakeAnswerEvent');
    socket.on('makeAnswer', async data => {
      await SignallingServerService.emitOnlinePractitionersEvent(socket);
      SignallingServerService.emitAnswerMadeEvent(socket, data);
    });
  }

  private static emitAnswerMadeEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitAnswerMadeEvent');
    socket.to(data.to).emit('answerMade', {
      socket: socket?.id,
      answer: data.answer,
    });
  }

  private static listenForIceCandidateEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForIceCandidateEvent');
    socket.on('iceCandidate', data => {
      SignallingServerService.emitCandidateSharedEvent(socket, data);
    });
  }

  private static emitCandidateSharedEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitCandidateSharedEvent');
    socket.to(data.to).emit('candidateShared', {
      candidate: data.candidate,
      socket: socket?.id,
    });
  }

  private static listenForDisconnectEvent(io: Socket, socket: Socket) {
    logger.info('Running SignallingServerService.listenForDisconnectEvent');
    socket.on('disconnect', async () => {
      let { userId, resourceType } = socket.handshake.query;
      resourceType = resourceType as unknown as string;
      resourceType = resourceType.toLowerCase();
      const user: IOnlineUser = { userId, resourceType } as IOnlineUser;
      logger.info(`DisconnectedUser: ${socket?.id}`);

      // Todo: correctly implement user's online presence by allowing them to turn on/off their online presence
      // that way, we can only send notification to the user's device when they are online
      // and as well persist the user's broadcast data to the database and then send it to users via API


      // Don't know remove practitioner from the room if the user is disconnected
      if (resourceType !== forWho.practitioner) {
        await SignallingServerService.redisStore.removeUserById(user.userId);
      }

      await SignallingServerService.emitOnlinePractitionersEvent(io);
    });
  }
}
