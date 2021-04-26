import { Server, Socket } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import Redis from 'ioredis';
import { Env } from '../../config/env';
import { ICareUpdate, INewCare } from './interfaces';
import { RedisStore } from './redisStore';

const env = Env.all();

const pubClient = new Redis({
  port: env.redis_port,
  host: env.redis_host,
  password: env.redis_password,
});
const subClient = pubClient.duplicate();

const redisStore = new RedisStore(pubClient);


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

  constructor(appServer: any) {
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
    this.io.on('connection', async (socket: any) => {
      await SignallingServerService.onConnection(socket);

      SignallingServerService.onNewVideoBroadcast(socket);

      SignallingServerService.onAcceptCare(socket);

      await SignallingServerService.onDisconnect(socket);
    });
  }

  private static async onConnection(socket: Socket) {
    const { user } = socket.handshake.auth;
    await redisStore.saveOnlineUser(user);

    socket.join('online');

    await SignallingServerService.onOnlineUsers(socket);
  }

  private static async onOnlineUsers(socket: Socket) {
    const onlineUsers = await redisStore.getOnlineUsers();

    socket.to('online').emit('onlineUsers', onlineUsers);
  }

  private static onNewVideoBroadcast(socket: Socket) {
    socket.on('newVideoBroadcast', async (newBroadcast) => {
      await redisStore.saveBroadcast(newBroadcast);
      const {
        patientId,
        videoUrl,
        initiateCare
      } = await redisStore
        .getBroadcastByVideoUrl(newBroadcast?.videoUrl);

      const newCareBroadCast = { patientId, initiateCare, videoUrl };

      SignallingServerService.onNewCare(socket, newCareBroadCast);
    });
  }

  private static onNewCare(socket: Socket, newCareBroadcast: INewCare) {
    socket.emit('newCare', newCareBroadcast);
  }

  private static onAcceptCare(socket: Socket) {
    socket.on('acceptCare', async(acceptCare) => {
      const existingCare = await redisStore.getBroadcastByVideoUrl(acceptCare?.videoUrl);

      if (existingCare?.status) {
         SignallingServerService.onCareUpdate(socket, {
          patientId: existingCare.patientId,
          videoUrl: existingCare.videoUrl,
          status: {
            alreadyMatched: existingCare.status,
            practitionerId: existingCare.practitionerId,
            acceptedDate: existingCare.acceptedDate,
          }
        });
      }

      acceptCare.status = acceptCare.initiateCare;
      acceptCare.acceptedDate = new Date();

      await redisStore.saveBroadcast(acceptCare);
    });
  }

  private static onCareUpdate(socket: Socket, careUpdate: ICareUpdate) {
    socket.emit('newCare', careUpdate);
  }

  private static async onDisconnect(socket: Socket) {
    const { user } = socket.handshake.auth;
    await redisStore.removeUserBY(user?.userId);

    socket.on('disconnect', async () => {
      await SignallingServerService.onOnlineUsers(socket);
    })
  }
}
