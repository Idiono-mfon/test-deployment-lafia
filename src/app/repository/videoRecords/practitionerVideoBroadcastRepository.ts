import { injectable } from 'inversify';
import {
  IPractitionerVideoBroadcast,
  IFindPractitionerVideoBroadcast,
  PractitionerVideoBroadcastModel,
} from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class PractitionerVideoBroadcastRepository {

    public async fetchPractitionerBroadcastByID(practitionerVideoBroadcastId: string){
      return PractitionerVideoBroadcastModel.query()
        .withGraphFetched('videoBroadcast')
        .findById(practitionerVideoBroadcastId);
    }

    public async savePractitionerBroadcastVideo(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
        try {
          return await PractitionerVideoBroadcastModel.query()
            .insert(data)
            .returning('*');
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getOnePractitionerBroadcastVideo(data: IFindPractitionerVideoBroadcast | any): Promise<IFindPractitionerVideoBroadcast> {
        try {
          return await PractitionerVideoBroadcastModel.query().findOne(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getAllPractitionerBroadcastVideos(user_id: string): Promise<IFindPractitionerVideoBroadcast[]> {
        try {
          return await PractitionerVideoBroadcastModel.query().where({ practitioner_id: user_id });
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
}