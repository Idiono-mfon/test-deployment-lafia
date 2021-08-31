import { injectable } from 'inversify';
import { IFindPractitionerVideoBroadcast, IPractitionerVideoBroadcast } from '../../models';
import { PractitionerVideoBroadcastModel } from '../../models/videoRecords/PractitionerVideoBroadcastModel';
import { InternalServerError } from '../../utils';

@injectable()
export class PractitionerVideoBroadcastRepository {

    public async fetchPractitionerBroadcastByID(practitionerVideoBroadcastId: string){
        const vid = await PractitionerVideoBroadcastModel.query().withGraphFetched('videoBroadcast').findById(practitionerVideoBroadcastId);
        return vid;
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