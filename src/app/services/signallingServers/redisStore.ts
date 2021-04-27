import _ from 'lodash';
import { IPatient, IPractitioner } from '../../models';
import { forWho, GenericResponseError, HttpStatusCode } from '../../utils';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { IBroadcastStatus, IOnlineUser } from './interfaces';

export class RedisStore {
  private readonly redisClient: any;
  private readonly onlineUsersKey: string;
  private readonly broadcastStatusKey: string;
  private readonly patientService: PatientService;
  private readonly practitionerService: PractitionerService;

  constructor(redisClient: any, patientService: PatientService, practitionerService: PractitionerService) {
    this.redisClient = redisClient;
    this.onlineUsersKey = 'onlineUsers';
    this.broadcastStatusKey = 'broadcastStatus';
    this.patientService = patientService;
    this.practitionerService = practitionerService;
  }

  private static encodeBase64(data: any): string {
    // Create buffer object, specifying utf8 as encoding
    const bufferObj = Buffer.from(data, 'utf8');

    // Encode the Buffer as a base64 string
    return bufferObj.toString('base64');
  }

  private static decodeBase64(base64Str: string): any {
    // Create a buffer from the string
    const bufferObj = Buffer.from(base64Str, 'base64');

    // Encode the Buffer as a utf8 string
    return bufferObj.toString('utf8');
  }

  public async getOnlineUsers(): Promise<IOnlineUser[]> {
    try {
      const encodedOnlineUsers = await this.redisClient.get(this.onlineUsersKey);

      if (!encodedOnlineUsers) {
        return [];
      }

      // Decode data
      const onlineUsersStr = RedisStore.decodeBase64(encodedOnlineUsers);

      return JSON.parse(onlineUsersStr);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserById(userId: string): Promise<IOnlineUser | any> {
    try {
      // Get All Online Users
      let onlineUsers: IOnlineUser[] | any = await this.getOnlineUsers();

      if (!onlineUsers) {
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
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeUserBY(userId: string): Promise<void> {
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
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async saveOnlineUser(user: IOnlineUser): Promise<void> {
    try {
      // Get All Online Users
      let onlineUsers: IOnlineUser[] = await this.getOnlineUsers();
      console.log('OnlineUsersExist:', onlineUsers);

      if (!onlineUsers) {
        onlineUsers = [];
      }

      console.log('userId', user.userId);
      console.log('userType:', user.resourceType);

      const existingUser = await this.getUserById(user.userId);
      console.log('existingUser:', existingUser);

      if (existingUser) {
        return;
      }

      let username: string = '';
      if (user?.resourceType === forWho.patient) {
        const patient: IPatient = await this.patientService.findPatientById(user.userId);

        console.log('patient block');
        // @ts-ignore
        username = patient?.name[0]?.text;
      }

      if (user?.resourceType === forWho.practitioner) {
        const practitioner: IPractitioner = await this.practitionerService.findPractitionerById(user.userId);

        console.log('practitioner block');
        // @ts-ignore
        username = practitioner?.name[0]?.text;
      }

      if (username) {
        user.username = username;
      }

      console.log('username:', username);

      // Update with the new users
      onlineUsers.push(user);
      console.log('pushedOnlineUsers:', onlineUsers);

      // Transform object to Base64 String
      const base64Str = RedisStore.encodeBase64(JSON.stringify(onlineUsers));

      // Save online user
      const savedUser = await this.redisClient.set(this.onlineUsersKey, base64Str);

      console.log('savedUser:', savedUser);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllBroadcasts(): Promise<IBroadcastStatus[]> {
    try {
      const encodedBroadcast = await this.redisClient.get(this.broadcastStatusKey);

      if (!encodedBroadcast) {
        return [];
      }

      // Decode data
      const onlineUsersStr = RedisStore.decodeBase64(encodedBroadcast);

      return JSON.parse(onlineUsersStr);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getBroadcastByVideoUrl(videoUrl: string): Promise<IBroadcastStatus | any> {
    try {
      // Get All Online Users
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
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async saveBroadcast(broadcast: IBroadcastStatus): Promise<void> {
    try {
      // Get All Online Users
      let broadcastStatus: IBroadcastStatus[] = await this.getAllBroadcasts();

      if (!broadcastStatus) {
        broadcastStatus = [];
      }

      const existingBroadcast = await this.getBroadcastByVideoUrl(broadcast.videoUrl);

      if (existingBroadcast) {
        return;
      }

      // Update with the new users
      broadcastStatus.push(broadcast);

      // Transform object to Base64 String
      const base64Str = RedisStore.encodeBase64(JSON.stringify(broadcastStatus));

      // Save online user
      await this.redisClient.set(this.broadcastStatusKey, base64Str);
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
