import { injectable } from 'inversify';
import { IFindVideoBroadcast, IVideoBroadcast, VideoBroadcastModel, } from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class VideoBroadcastRepository {

  public async fetchBroadcastByID(videoBroadcastId: string) {
    logger.info('Running VideoBroadcastRepository::fetchBroadcastByID');
    return VideoBroadcastModel.query().findById(videoBroadcastId);
  }

  public async saveBroadcastVideo(data: IVideoBroadcast): Promise<IVideoBroadcast> {
    logger.info('Running VideoBroadcastRepository::saveBroadcastVideo');
    try {
      return await VideoBroadcastModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneBroadcastVideo(data: IFindVideoBroadcast | any): Promise<IFindVideoBroadcast> {
    logger.info('Running VideoBroadcastRepository::saveBroadcastVideo');
    try {
      return await VideoBroadcastModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllBroadcastVideos(user_id: string): Promise<IFindVideoBroadcast[]> {
    logger.info('Running VideoBroadcastRepository::getAllBroadcastVideos');
    try {
      return await VideoBroadcastModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteBroadcastVideos(id: string): Promise<any> {
    logger.info('Running VideoBroadcastRepository::deleteBroadcastVideos');
    try {
      return await VideoBroadcastModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
