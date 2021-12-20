import { IFindVideoRecord, IVideoRecord } from '../../../models';

export interface ILafiaMediaService {
  createBroadcast(patient_id: string): Promise<IStream>;

  getRecordedStream(id: string): Promise<string>;

  addStreamUrlToPatientBroadcast(streamUrl: string, event: any): Promise<void>;

  findOne(data: IFindVideoRecord | any): Promise<IVideoRecord>;

  findAll(user_id: string): Promise<IVideoRecord[]>;

  delete(id: string): Promise<any>;

  update(id: string, data: IFindVideoRecord): Promise<any>;
}

export interface IStream {
  rtmp_url: string;
  stream_key: string;
}
