export interface IOnlineUser {
  userId: string;
  resourceType: string;
  username?: string;
}

export interface IBroadcastStatus {
  videoUrl: string;
  practitionerId?: string;
  initiateCare: boolean;
  patientId: string;
  status?: boolean;
  acceptedDate?: Date;
}

export interface ICareUpdate {
  patientId: string;
  videoUrl: string;
  status?: ICareUpdateStatus;
}

interface ICareUpdateStatus {
  alreadyMatched: boolean;
  practitionerId: string;
  acceptedDate?: Date;
}

export interface IAcceptCare {
  patientId: string;
  practitionerId: string;
  videoUrl: string;
  initiateCare: boolean;
}

export interface INewCare {
  patientId: string;
  videoUrl: string;
  initiateCare: boolean;
}

export type INewBroadcast = INewCare;
