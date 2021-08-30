import { IBase } from '../../base';

export interface IVideoRecord extends IBase {
  patientId?: string;
  patient_id?: string;
  streamId: string;
  vodId?: string;
  stream_url?: string;
  streamUrl?: string;
}

export interface IFindVideoRecord extends IBase {
  patientId?: string;
  patient_id?: string;
  streamId?: string;
  vodId?: string;
  stream_url?: string;
  streamUrl?: string;
}

export interface IVideoBroadcast extends IBase {
  patientId?: string;
  patient_id?: string;
  description: string;
  initiate_care?: string;
  initiateCare?: string;
  videoUrl?: string;
  video_url?: string;
}

export interface IFindVideoBroadcast extends IBase {
  patientId?: string;
  patient_id?: string;
  description: string;
  initiate_care?: string;
  initiateCare?: string;
  videoUrl?: string;
  video_url?: string;
}