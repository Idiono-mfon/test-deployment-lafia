export interface IOnlineUser {
  userId: string;
  resourceType: string;
  username?: string;
}

export interface IBroadcastStatus {
  videoUrl: string;
  practitionerId: string;
  initiateCare: boolean;
  patientId: string;
}

export type IAcceptCare = IBroadcastStatus

export interface INewCare {
  patientId: string;
  videoUrl: string;
  initiateCare: boolean;
}

export type INewBroadcast = INewCare;
