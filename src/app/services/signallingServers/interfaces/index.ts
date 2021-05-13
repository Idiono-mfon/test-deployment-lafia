export interface IOnlineUser {
  userId: string;
  resourceType: string;
  username?: string;
  socketId: string;
}

export interface IBroadcastStatus {
  videoUrl: string;
  practitionerId?: string;
  initiateCare: boolean;
  patientId: string;
  patientName: string;
  description: string;
  videoTime: string;
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
