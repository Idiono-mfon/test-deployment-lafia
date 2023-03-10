import { inject, injectable } from 'inversify';
import Redis from 'ioredis';
import { Server, Socket } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { v4 as uuid } from 'uuid';
import { Env, IEnv } from '../../config/env';
import TYPES from '../../config/types';
import { IAppointment, IPractitionerVideoBroadcast, IVideoBroadcast } from '../../models';
import { forWho, logger } from '../../utils';
import { eventName, eventService } from '../eventEmitter';
import {
  BroadcastData,
  BroadcastNotificationPayload,
  CallNotificationPayload,
} from '../notifications';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { TwilioService } from '../twilio';
import { VideoBroadcastService } from '../videoRecords';
import { IAcceptCare, INewBroadcast, INewCare, IOnlineUser, ISignallingServerService } from './interfaces';
import { RedisStore } from './redisStore';
import { AppointmentService } from '../appointments';

@injectable()
export class SignallingServerService implements ISignallingServerService {
  private io: any;
  private readonly env: IEnv;
  private readonly pubClient: any;
  private readonly subClient: any;
  private static onlinePractitionerRoom: string;

  @inject(TYPES.RedisStore)
  private readonly redisStore: RedisStore;
  @inject(TYPES.TwilioService)
  private readonly twilioService: TwilioService;
  @inject(TYPES.VideoBroadcastService)
  private readonly videoBroadcastService: VideoBroadcastService;
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.AppointmentService)
  private readonly appointmentService: AppointmentService;

  constructor() {
    SignallingServerService.onlinePractitionerRoom = 'onlinePractitioners';

    this.env = Env.all();
    this.pubClient = new Redis(
      {
        port: this.env.redis_port,
        host: this.env.redis_host,
        username: this.env.redis_username,
        password: this.env.redis_password
      }
    );
    this.subClient = this.pubClient.duplicate();
  }

  public initialize(appServer: any): void {
    logger.info('Running SignallingServerService.initialize');

    this.configureSocket(appServer);
    this.io.on('connection', async (socket: Socket) => {
      await this.listenForConnectionEvent(socket);
      await this.emitOnlinePractitionersEvent(this.io);
      this.listenForNewVideoBroadcastEvent(socket);
      this.listenForConnectionData(socket);
      this.listenForAcceptCareEvent(socket);
      SignallingServerService.listenForIceCandidateEvent(socket);
      this.listenForPatientOnlineStatusEvent(socket);
      this.listenForCallUserEvent(socket);
      this.listenForCallEvent(socket);
      this.listenForMakeAnswerEvent(socket);
      this.listenForDisconnectEvent(this.io, socket);
    });

    this.redisStore.configure(this.pubClient);
  }

  private configureSocket(appServer: any) {
    logger.info('Running SignallingServerService.configureSocket');

    this.io = new Server(appServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
      },
      allowEIO3: true
    });
    this.io.adapter(createAdapter(this.pubClient, this.subClient));
  }

  private async listenForConnectionEvent(socket: Socket) {
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

    console.log(user); 

    if (user.userId && user.userId !== 'undefined') {
      await this.redisStore.saveOnlineUser(user);
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

  private async getOnlineUsers() {
    return this.redisStore.getOnlineUsers();
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

  private async sendFirebaseNotificationToAllPractitioners(
    eventName: string, data: BroadcastData
  ) {
    const onlineUsers = await this.getOnlineUsers();
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

  private async emitOnlinePractitionersEvent(socket: Socket) {
    logger.info('Running SignallingServerService.emitOnlinePractitionersEvent');

    const onlineUsers = await this.getOnlineUsers();
    const onlinePractitioners = await SignallingServerService.getOnlinePractitioners(onlineUsers);

    logger.info(`OnlinePractitioners: ${JSON.stringify(onlinePractitioners)}`);
    logger.info(`OnlineUsers: ${JSON.stringify(onlineUsers)}`);

    socket.emit('onlinePractitioners', onlinePractitioners);
  }

  private listenForNewVideoBroadcastEvent(socket: Socket) {
    // simply stores the video details to redis cache and db, and sends events to rabbitmq and practitioners' room
    logger.info('Running SignallingServerService.listenForNewVideoBroadcastEvent');
    
    socket.on('newVideoBroadcast', async (newBroadcast: INewBroadcast) => {
      // Create Appointment using AppointmentService
      const vidAppointment:IAppointment = {
        resource_type: 'Appointment',
        patient_participant: `Patient/${newBroadcast.patientId}`,
        description: `Video from patient: ${newBroadcast.patientName}`,
        status: 'proposed'
      };
      const appointment: IAppointment = await this.appointmentService.create(vidAppointment);
      
      //   logger.info('===NEW EVENT: newVideoBroadcast===');
      newBroadcast.appointment_ref = `Appointment/${appointment.id}`;
      await this.redisStore.saveBroadcast(newBroadcast);

      const newCareBroadCast = await this.redisStore
        .getBroadcastByVideoUrl(newBroadcast.videoUrl);

      // emit socket event to practitioners' room for client to pick up
      SignallingServerService.emitNewCareEvent(socket, newCareBroadCast);

      // Send kafka message to practitioner # this is NOT kafka, but rather, node events that gets listened to inside rabbitMqService.handleEvents() which simply sends it to app.lafia
      eventService.emit(eventName.newBroadcast, newCareBroadCast);

      // Send firebase notification to all practitioners
      await this.sendFirebaseNotificationToAllPractitioners(eventName.sendNotification, newCareBroadCast);

      if (newCareBroadCast.videoUrl) {
        const patient: IOnlineUser = await this.redisStore.getUserById(newCareBroadCast.patientId);

        const vidBroadcast: IVideoBroadcast = {
          patient_name: patient.username,
          patient_id: newCareBroadCast.patientId,
          description: newCareBroadCast.description,
          initiate_care: String(newCareBroadCast.initiateCare),
          video_url: newCareBroadCast.videoUrl,
          appointment_ref: `Appointment/${appointment.id}`
        }

        // console.log(vidBroadcast);

        // database
        await this.videoBroadcastService.create(vidBroadcast);
      }
    });
  }

  private listenForConnectionData(socket: Socket) {
    logger.info('Running SignallingServerService.listenForConnectionData');
    socket.on('connectionData', async (connectionData: IOnlineUser) => {
      logger.info(`ConnectionData: ${JSON.stringify(connectionData)}`);

      await this.redisStore.removeUserBySocketId(socket.id);

      const user: IOnlineUser = {
        ...connectionData,
        resourceType: connectionData?.resourceType?.toLowerCase(),
        socketId: socket?.id,
      } as IOnlineUser;

      await this.redisStore.saveOnlineUser(user);

      SignallingServerService.joinOnlinePractitionerRoom(socket, user);

      await this.emitOnlinePractitionersEvent(socket);
    });
  }

  private static emitNewCareEvent(socket: Socket, newCareBroadcast: INewCare) {
    logger.info('Running SignallingServerService.emitNewCareEvent');
    socket.to(SignallingServerService.onlinePractitionerRoom)
      .emit('newCare', newCareBroadcast);
  }

  private listenForAcceptCareEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForAcceptCareEvent');
    socket.on('acceptCare', async (acceptCare: IAcceptCare, cb) => {
      const existingCare = await this.redisStore.getBroadcastByVideoUrl(acceptCare.videoUrl);

      // console.log(existingCare);

      if (existingCare?.initiateCare) {
        if (existingCare?.practitionerId !== undefined && existingCare?.practitionerId !== acceptCare?.practitionerId) {
          return cb({
            status: false,
            description: 'Care already initiated by another practitioner'
          });
        }
      }

      await this.redisStore.updateBroadcast(acceptCare);

      const videoBroadcast = await this.videoBroadcastService.findOne({
        patient_id: existingCare.patientId,
        video_url: existingCare.videoUrl
      });

      if (videoBroadcast) {
        const vidId: string = videoBroadcast.id ? videoBroadcast.id : '';
        const data: IPractitionerVideoBroadcast = {
          practitioner_id: acceptCare.practitionerId,
          video_broadcast_id: vidId
        }

        await this.videoBroadcastService.assignBroadcastVideoToPractitioner(data);
      }


      const defaultRoomName = uuid();
      const { token, roomId } = await this.twilioService
        .generateAccessToken(acceptCare?.practitionerId as string, defaultRoomName);
      return cb({
        roomId,
        token,
        status: true,
        description: 'You accepted to give care to the patient'
      });
    });
  }

  private listenForPatientOnlineStatusEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForPatientOnlineStatusEvent');
    socket.on('patientOnlineStatus', async (data, cb) => {
      const userData: IOnlineUser = await this.redisStore.getUserById(data.patientId);

      if (!userData?.socketId) {
        return cb({
          status: 'offline',
          patientSocketId: null,
        });
      }
      await this.emitOnlinePractitionersEvent(socket);

      return cb({
        status: 'online',
        patientSocketId: userData?.socketId,
      });
    });
  }

  private listenForCallUserEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForCallUserEvent');
    socket.on('callUser', async (data) => {
      await this.emitCallMadeEvent(socket, data);
    });
  }

  private async emitCallMadeEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitCallMadeEvent');
    const { token } = await this.twilioService.generateAccessToken(data.patientId, data.roomId);

    socket.to(data.to).emit('callMade', {
      roomId: data.roomId,
      token,
      practitionerName: data.practitionerName,
      socket: socket?.id,
    });
  }

  private listenForCallEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForCallEvent');
    socket.on('call', async (data) => {
      await this.emitCallEvent(socket, data);
    });
  }

  private async emitCallEvent(socket: Socket, data: any) {
    logger.info('Running SignallingServerService.emitCallEvent');
    const reciever: IOnlineUser = await this.redisStore.getUserById(data.reciever);
    const sender: IOnlineUser = await this.redisStore.getUserById(data.sender);

    const access = data.type === 'connect' ? await this.twilioService.generateAccessToken(data.reciever, data.room) : null;

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
      user_image: reciever?.userImage as string,
      user_name: reciever?.username as string,
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

  private listenForMakeAnswerEvent(socket: Socket) {
    logger.info('Running SignallingServerService.listenForMakeAnswerEvent');
    socket.on('makeAnswer', async data => {
      await this.emitOnlinePractitionersEvent(socket);
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

  private listenForDisconnectEvent(io: Socket, socket: Socket) {
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
        await this.redisStore.removeUserById(user.userId);
      }

      await this.emitOnlinePractitionersEvent(io);
    });
  }
}
