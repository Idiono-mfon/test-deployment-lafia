import { injectable } from 'inversify';
import { IFindVideoBroadcast, IVideoBroadcast, VideoBroadcastModel, } from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class VideoBroadcastRepository {

  public async fetchBroadcastByID(videoBroadcastId: string) {
    return VideoBroadcastModel.query().findById(videoBroadcastId);
  }

  public async saveBroadcastVideo(data: IVideoBroadcast): Promise<IVideoBroadcast> {
    try {
      return await VideoBroadcastModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneBroadcastVideo(data: IFindVideoBroadcast | any): Promise<IFindVideoBroadcast> {
    try {
      return await VideoBroadcastModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllBroadcastVideos(user_id: string): Promise<IFindVideoBroadcast[]> {
    try {
      return await VideoBroadcastModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteBroadcastVideos(id: string): Promise<any> {
    try {
      return await VideoBroadcastModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
