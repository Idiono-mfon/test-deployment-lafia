import { injectable } from 'inversify';
import { IFindVideoBroadcast, IVideoBroadcast } from '../../models';
import { VideoBroadcastModel } from '../../models/videoRecords/videoBroadcastModel';
import { InternalServerError } from '../../utils';

@injectable()
export class VideoBroadcastRepository {

    public async saveBroadcastVideo(data: IVideoBroadcast): Promise<IVideoBroadcast> {
        try {
          return await VideoBroadcastModel.query()
            .insert(data)
            .returning('*');
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getOneBroadcastVideo(data: IFindVideoBroadcast | any): Promise<IFindVideoBroadcast> {
        try {
          return await VideoBroadcastModel.query().findOne(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getAllBroadcastVideos(user_id: string): Promise<IFindVideoBroadcast[]> {
        try {
          return await VideoBroadcastModel.query().where({ patient_id: user_id });
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
}