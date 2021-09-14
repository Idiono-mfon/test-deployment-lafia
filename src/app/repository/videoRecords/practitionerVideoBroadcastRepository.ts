import { injectable } from 'inversify';
import {
  IPractitionerVideoBroadcast,
  IFindPractitionerVideoBroadcast,
  PractitionerVideoBroadcastModel,
} from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class PractitionerVideoBroadcastRepository {

  public async fetchPractitionerBroadcastByID(practitionerVideoBroadcastId: string) {
    return PractitionerVideoBroadcastModel.query()
      .withGraphFetched('videoBroadcast')
      .findById(practitionerVideoBroadcastId);
  }

  public async savePractitionerBroadcastVideo(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
    try {
      return await PractitionerVideoBroadcastModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOnePractitionerBroadcastVideo(data: IFindPractitionerVideoBroadcast | any): Promise<IFindPractitionerVideoBroadcast> {
    try {
      return await PractitionerVideoBroadcastModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllPractitionerBroadcastVideos(user_id: string): Promise<IFindPractitionerVideoBroadcast[]> {
    try {
      return await PractitionerVideoBroadcastModel.query()
        .where({ practitioner_id: user_id })
        .withGraphFetched(`[video_broadcasts]`);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deletePractitionerBroadcastVideos(id: string): Promise<any> {
    try {
      return await PractitionerVideoBroadcastModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
