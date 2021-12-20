import {
  IFindVideoBroadcast,
  IFindVideoRecord,
  IPractitionerVideoBroadcast, ITwilioRoom,
  IVideoBroadcast,
  IVideoRecord
} from '../../../models';

export interface IVideoRecordService {
  create(data: IVideoRecord): Promise<IVideoRecord>;

  findOne(data: IFindVideoRecord | any): Promise<IVideoRecord>;

  findAll(user_id: string): Promise<IVideoRecord[]>;

  delete(id: string): Promise<IVideoRecord>;

  update(id: string, data: IFindVideoRecord): Promise<any>;
}

export interface IVideoBroadcastService {
  create(data: IVideoBroadcast): Promise<IVideoBroadcast>;

  findOne(data: IFindVideoBroadcast | any): Promise<IVideoBroadcast>;

  findAll(user_id: string): Promise<IVideoBroadcast[]>;

  delete(id: string): Promise<any>;

  findAllPractitionerBroadcastVideos(user_id: string): Promise<any>;

  assignBroadcastVideoToPractitioner(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast>;

  deletePractitionerBroadcastVideo(id: string): Promise<IPractitionerVideoBroadcast>;
}

export interface ITwilioRoomService {
  create(data: ITwilioRoom): Promise<ITwilioRoom>;

  findOne(data: ITwilioRoom | any): Promise<ITwilioRoom>;

  findAll(user_id: string): Promise<ITwilioRoom[]>;
}
