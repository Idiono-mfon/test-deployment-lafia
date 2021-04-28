import { Server, Socket } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import Redis from 'ioredis';
import { Env } from '../../config/env';
import { forWho } from '../../utils';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
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

  constructor(appServer: any, patientService: PatientService, practitionerService: PractitionerService) {
    SignallingServerService.redisStore = new RedisStore(pubClient, patientService, practitionerService);
    SignallingServerService.onlinePractitionerRoom = 'onlinePractitioners';

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
      await SignallingServerService.onConnection(socket);
      SignallingServerService.onNewVideoBroadcast(socket);
      SignallingServerService.onAcceptCare(socket);
      SignallingServerService.onJoinRoom(socket);
      SignallingServerService.onOffer(socket);
      SignallingServerService.onAnswer(socket);
      SignallingServerService.onIceCandidate(socket);
      SignallingServerService.onDisconnect(socket);
    });
  }

  private static async onConnection(socket: Socket) {
    console.log(`User connected: ${socket.id}`);

    let { userId, resourceType } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType.toLowerCase();
    const user: IOnlineUser = { userId, resourceType } as IOnlineUser;

    await SignallingServerService.redisStore.saveOnlineUser(user);
    const loggedInUser = await SignallingServerService.redisStore.getUserById(userId as string);

    loggedInUser.socketId = socket.id;

    console.log('ConnectedUser:', loggedInUser);

    if (user.resourceType === forWho.practitioner) {
      socket.join(SignallingServerService.onlinePractitionerRoom);
    }

    await SignallingServerService.onOnlineUsers(socket);
  }

  private static async onOnlineUsers(socket: Socket) {
    const onlineUsers = await SignallingServerService.redisStore.getOnlineUsers();

    socket.to('onlineUsers').emit('onlineUsers', onlineUsers);
  }

  private static onNewVideoBroadcast(socket: Socket) {
    socket.on('newVideoBroadcast', async (newBroadcast: INewBroadcast) => {
      await SignallingServerService.redisStore.saveBroadcast(newBroadcast);
      const {
        patientId,
        videoUrl,
        initiateCare,
        patientName
      } = await this.redisStore
        .getBroadcastByVideoUrl(newBroadcast.videoUrl);

      const newCareBroadCast = { patientId, initiateCare, videoUrl, patientName };

      console.log('newCareBroadcast:', newCareBroadCast);

      SignallingServerService.onNewCare(socket, newCareBroadCast);
    });
  }

  private static onNewCare(socket: Socket, newCareBroadcast: INewCare) {
    socket.to(SignallingServerService.onlinePractitionerRoom)
      .emit('newCare', newCareBroadcast);
    console.log('newCare:', newCareBroadcast);
  }

  private static onAcceptCare(socket: Socket) {
    socket.on('acceptCare', async (acceptCare: IAcceptCare, cb) => {
      const existingCare = await SignallingServerService.redisStore.getBroadcastByVideoUrl(acceptCare.videoUrl);

      if (existingCare?.initiateCare) {
        return cb({ status: true });
      }

      await SignallingServerService.redisStore.saveBroadcast(acceptCare);

      return cb({ status: false });
    });
  }

  private static onJoinRoom(socket: Socket) {
    socket.on('joinRoom', async (roomId: string) => {
      const room = await SignallingServerService.redisStore.getRoomById(roomId);
      console.log('Room:', room);

      room.push(socket.id);

      await SignallingServerService.redisStore.addRoom(roomId, room)

      const otherUser = room.find((id: string) => id !== socket.id);

      if (otherUser) {
        socket.emit('otherUser', otherUser);
        socket.to(otherUser).emit('userJoined', socket.id);
      }
    });
  }

  private static onOffer(socket: Socket) {
    socket.on('offer', payload => {
      socket.to(payload.target).emit('offer', payload);
    });
  }

  private static onAnswer(socket: Socket) {
    socket.on('answer', payload => {
      socket.to(payload.target).emit('answer', payload);
    })
  }

  private static onIceCandidate(socket: Socket) {
    socket.on('iceCandidate', incoming => {
      socket.to(incoming.target).emit('iceCandidate', incoming.candidate);
    });
  }

  private static onDisconnect(socket: Socket) {
    let { userId, resourceType } = socket.handshake.query;
    resourceType = resourceType as unknown as string;
    resourceType = resourceType.toLowerCase();
    const user: IOnlineUser = { userId, resourceType } as IOnlineUser;


    socket.on('disconnect', async () => {
      await SignallingServerService.redisStore.removeUserBY(user.userId);

      // Todo: delete room when any of the sockets disconnects

      console.log(`User disconnected: ${socket.id}`);

      await SignallingServerService.onOnlineUsers(socket);
    });
  }
}
