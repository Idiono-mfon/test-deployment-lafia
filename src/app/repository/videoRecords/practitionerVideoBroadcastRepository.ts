import { injectable } from 'inversify';
import {
  IPractitionerVideoBroadcast,
  IFindPractitionerVideoBroadcast,
  PractitionerVideoBroadcastModel,
} from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class PractitionerVideoBroadcastRepository {

  public async fetchPractitionerBroadcastByID(practitionerVideoBroadcastId: string) {
    logger.info('Running PractitionerVideoBroadcastRepository::fetchPractitionerBroadcastByID');
    return PractitionerVideoBroadcastModel.query()
      .withGraphFetched('videoBroadcast')
      .findById(practitionerVideoBroadcastId);
  }

  public async savePractitionerBroadcastVideo(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
    logger.info('Running PractitionerVideoBroadcastRepository::savePractitionerBroadcastVideo');
    try {
      return await PractitionerVideoBroadcastModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOnePractitionerBroadcastVideo(data: IFindPractitionerVideoBroadcast | any): Promise<IFindPractitionerVideoBroadcast> {
    logger.info('Running PractitionerVideoBroadcastRepository::getOnePractitionerBroadcastVideo');
    try {
      return await PractitionerVideoBroadcastModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllPractitionerBroadcastVideos(user_id: string): Promise<IFindPractitionerVideoBroadcast[]> {
    logger.info('Running PractitionerVideoBroadcastRepository::getAllPractitionerBroadcastVideos');
    try {
      return await PractitionerVideoBroadcastModel.query()
        .where({ practitioner_id: user_id })
        .withGraphFetched(`[video_broadcasts]`);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deletePractitionerBroadcastVideos(id: string): Promise<any> {
    logger.info('Running PractitionerVideoBroadcastRepository::deletePractitionerBroadcastVideos');
    try {
      return await PractitionerVideoBroadcastModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
