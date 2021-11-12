import _ from 'lodash';
import { IPatient, IPractitioner } from '../../models';
import { forWho, GenericResponseError, HttpStatusCode, logger } from '../../utils';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { IBroadcastStatus, IOnlineUser, IRoom, IRooms } from './interfaces';

export class RedisStore {
  private readonly redisClient: any;
  private readonly onlineUsersKey: string;
  private readonly broadcastStatusKey: string;
  private readonly roomKey: string;
  private readonly patientService: PatientService;
  private readonly practitionerService: PractitionerService;

  constructor(redisClient: any, patientService: PatientService, practitionerService: PractitionerService) {
    this.roomKey = 'rooms';
    this.onlineUsersKey = 'onlineUsers';
    this.broadcastStatusKey = 'broadcastStatus';
    this.redisClient = redisClient;
    this.patientService = patientService;
    this.practitionerService = practitionerService;
  }

  private static encodeBase64(data: any): string {
    logger.info('Running RedisStore.encodeBase64');
    // Create buffer object, specifying utf8 as encoding
    const bufferObj = Buffer.from(data, 'utf8');

    // Encode the Buffer as a base64 string
    return bufferObj.toString('base64');
  }

  private static decodeBase64(base64Str: string): any {
    logger.info('Running RedisStore.decodeBase64');
    // Create a buffer from the string
    const bufferObj = Buffer.from(base64Str, 'base64');

    // Encode the Buffer as a utf8 string
    return bufferObj.toString('utf8');
  }

  public async getOnlineUsers(): Promise<IOnlineUser[]> {
    logger.info('Running RedisStore.getOnlineUsers');
    try {
      const encodedOnlineUsers = await this.redisClient.get(this.onlineUsersKey);

      if (!encodedOnlineUsers) {
        return [];
      }

      // Decode data
      const onlineUsersStr = RedisStore.decodeBase64(encodedOnlineUsers);

      return JSON.parse(onlineUsersStr);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserById(userId: string): Promise<IOnlineUser | any> {
    logger.info('Running RedisStore.getUserById');
    try {
      // Get All Online Users
      let onlineUsers: IOnlineUser[] | any = await this.getOnlineUsers();

      if (!onlineUsers || _.isEmpty(onlineUsers)) {
        return;
      }

      let onlineUser: IOnlineUser | any;
      for (let user of onlineUsers) {
        if (user?.userId === userId) {
          onlineUser = user;
          break;
        }
      }

      return onlineUser;
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeUserBYId(userId: string): Promise<void> {
    logger.info('Running RedisStore.removeUserBYId');
    try {
      // Get All Online Users
      const onlineUsers: IOnlineUser[] | any = await this.getOnlineUsers();

      if (!onlineUsers) {
        return;
      }

      _.remove(onlineUsers, (user: IOnlineUser | any) => {
        return user?.userId === userId;
      });

      const base64Str = RedisStore.encodeBase64(JSON.stringify(onlineUsers));

      await this.redisClient.set(this.onlineUsersKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async saveOnlineUser(user: IOnlineUser): Promise<void> {
    logger.info('Running RedisStore.saveOnlineUser');
    try {
      // Get All Online Users
      let onlineUsers: IOnlineUser[] = await this.getOnlineUsers();

      if (!onlineUsers) {
        onlineUsers = [];
      }

      const existingUser = await this.getUserById(user.userId);

      if (existingUser) {
        user.deviceToken = existingUser.deviceToken;
        user.socketId = existingUser.socketId;
      } else {
        let username: string = '';

        if (user?.resourceType === forWho.patient) {
          try {
            const patient: IPatient = await this.patientService.findPatientById(user.userId);
            // @ts-ignore
            username = patient?.name[0]?.text;
          } catch (e: any) {
            console.log(e);
          }
        }

        if (user?.resourceType === forWho.practitioner) {
          try {
            const practitioner: IPractitioner = await this.practitionerService.findPractitionerById(user.userId);
            // @ts-ignore
            username = practitioner?.name[0]?.text;
          } catch (e: any) {
            console.log(e);
          }

        }

        if (username) {
          user.username = username;
        }
      }

      // Update with the new users
      onlineUsers.push(user);

      // Encode to Base64
      const base64Str = RedisStore.encodeBase64(JSON.stringify(onlineUsers));

      // Save online user
      await this.redisClient.set(this.onlineUsersKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllBroadcasts(): Promise<IBroadcastStatus[]> {
    logger.info('Running RedisStore.getAllBroadcasts');
    try {
      const encodedBroadcast = await this.redisClient.get(this.broadcastStatusKey);

      if (!encodedBroadcast) {
        return [];
      }

      // Decode data
      const decodedBroadcast = RedisStore.decodeBase64(encodedBroadcast);

      return JSON.parse(decodedBroadcast);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getBroadcastByVideoUrl(videoUrl: string): Promise<IBroadcastStatus | any> {
    logger.info('Running RedisStore.getBroadcastByVideoUrl');
    try {
      // Get All Broadcast
      let broadcastStatus: IBroadcastStatus[] | any = await this.getAllBroadcasts();

      if (!broadcastStatus) {
        return;
      }

      let broadCast: IBroadcastStatus | any;
      for (let status of broadcastStatus) {
        if (status?.videoUrl === videoUrl) {
          broadCast = status;
          break;
        }
      }

      return broadCast;
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async saveBroadcast(broadcast: IBroadcastStatus): Promise<void> {
    logger.info('Running RedisStore.saveBroadcast');
    try {
      // Get All Broadcast
      let broadcastStatus: IBroadcastStatus[] = await this.getAllBroadcasts();

      if (!broadcastStatus) {
        broadcastStatus = [];
      }

      const existingBroadcast = await this.getBroadcastByVideoUrl(broadcast.videoUrl);

      if (existingBroadcast) {
        _.remove(broadcastStatus, (bs: IBroadcastStatus | any) => {
          return bs.videoUrl === broadcast.videoUrl;
        });
      }

      const patient: IPatient = await this.patientService.findPatientById(broadcast.patientId);

      // @ts-ignore
      const patientName = patient?.name[0]?.text;

      // Update Broadcast
      broadcastStatus.push({ ...broadcast, patientName });

      // Encode to Base64
      const base64Str = RedisStore.encodeBase64(JSON.stringify(broadcastStatus));

      // Update Redis Data
      await this.redisClient.set(this.broadcastStatusKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateBroadcast(broadcast: IBroadcastStatus): Promise<void> {
    logger.info('Running RedisStore.updateBroadcast');
    try {
      // Get All Broadcast
      let broadcastStatus: IBroadcastStatus[] = await this.getAllBroadcasts();

      if (!broadcastStatus) {
        broadcastStatus = [];
      }

      const existingBroadcast = await this.getBroadcastByVideoUrl(broadcast.videoUrl);

      if (existingBroadcast) {
        _.remove(broadcastStatus, (bs: IBroadcastStatus | any) => {
          return bs.videoUrl === broadcast.videoUrl;
        });
      }

      // Update Broadcast
      broadcastStatus.push(broadcast);

      // Encode to Base64
      const base64Str = RedisStore.encodeBase64(JSON.stringify(broadcastStatus));

      // Update Redis Data
      await this.redisClient.set(this.broadcastStatusKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllRooms(): Promise<IRooms> {
    logger.info('Running RedisStore.getAllRooms');
    try {
      const encodedRoom = await this.redisClient.get(this.roomKey);

      if (!encodedRoom) {
        return {};
      }

      // Decode data
      const decodedRoom = RedisStore.decodeBase64(encodedRoom);

      return JSON.parse(decodedRoom);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getRoomById(id: string): Promise<IRoom | any> {
    logger.info('Running RedisStore.getRoomById');
    try {
      // Get All Rooms
      let rooms = await this.getAllRooms();

      if (_.isEmpty(rooms)) {
        return [];
      }

      let room: string[] = [];
      for (let roomId in rooms) {
        if (id === roomId) {
          room.concat(rooms[id]);
          return room;
        }
      }

      return room;
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteRoomById(roomId: string): Promise<void> {
    logger.info('Running RedisStore.deleteRoomById');
    try {
      // Get All Rooms
      const rooms: IRooms = await this.getAllRooms();

      // Do nothing if the room is empty
      if (!rooms || _.isEmpty(rooms)) {
        return;
      }

      // Remove the room
      delete rooms[roomId];

      // Encode to Base64
      const base64Str = RedisStore.encodeBase64(JSON.stringify(rooms));

      // Update Redis data
      await this.redisClient.set(this.roomKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async addRoom(roomId: string, room: IRoom): Promise<void> {
    logger.info('Running RedisStore.addRoom');
    try {
      // Get All Rooms
      let rooms: IRooms = await this.getAllRooms();

      // Add room to the rooms
      rooms[roomId] = room;

      // Encode to Base64
      const base64Str = RedisStore.encodeBase64(JSON.stringify(rooms));

      // Update Redis data
      await this.redisClient.set(this.roomKey, base64Str);
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
