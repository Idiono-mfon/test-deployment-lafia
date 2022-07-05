export interface IOnlineUser {
  userId: string;
  resourceType: string;
  username?: string;
  socketId: string;
  deviceToken: string;
  userImage?: string;
}

export interface IBroadcastStatus {
  videoUrl: string;
  practitionerId?: string;
  initiateCare: boolean;
  patientId: string;
  patientName: string;
  description: string;
  videoTime: string;
  appointment_ref?: string;
}

export interface INewCare {
  patientId: string;
  patientName: string;
  videoUrl: string;
  initiateCare: boolean;
  description: string;
  videoTime: string;
}

export interface IRooms {
  [key: string]: string[];
}

export type IRoom = string[];
export type IAcceptCare = IBroadcastStatus
export type INewBroadcast = IBroadcastStatus;

export interface IRedisStore {
  configure(redisClient: any): void;

  getOnlineUsers(): Promise<IOnlineUser[]>;

  getUserById(userId: string): Promise<IOnlineUser | any>;

  getUserBySocketId(socketId: string): Promise<IOnlineUser | any>;

  removeUserById(userId: string): Promise<void>;

  removeUserBySocketId(socketId: string): Promise<void>;

  saveOnlineUser(user: IOnlineUser): Promise<void>;

  getAllBroadcasts(): Promise<IBroadcastStatus[]>;

  getBroadcastByVideoUrl(videoUrl: string): Promise<IBroadcastStatus | any>;

  saveBroadcast(broadcast: IBroadcastStatus): Promise<void>;

  updateBroadcast(broadcast: IBroadcastStatus): Promise<void>;

  getAllRooms(): Promise<IRooms>;

  getRoomById(id: string): Promise<IRoom | any>;

  deleteRoomById(roomId: string): Promise<void>;

  addRoom(roomId: string, room: IRoom): Promise<void>;
}

export interface ISignallingServerService {
  initialize(appServer: any): void;
}
