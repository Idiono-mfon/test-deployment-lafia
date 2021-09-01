import { inject, injectable } from "inversify";
import TYPES from "../../config/types";
import { IFindVideoBroadcast, IPractitionerVideoBroadcast, IVideoBroadcast } from "../../models";
import { VideoBroadcastModel } from "../../models/videoRecords/videoBroadcastModel";
import { VideoBroadcastRepository } from "../../repository";
import { PractitionerVideoBroadcastRepository } from "../../repository/videoRecords/practitionerVideoBroadcastRepository";
import { InternalServerError, NotFoundError } from "../../utils";

@injectable()
export class VideoBroadcastService {
    @inject(TYPES.VideoBroadcastRepository)
    private readonly videoBroadcastRepository: VideoBroadcastRepository;

    @inject(TYPES.PractitionerVideoBroadcastRepository)
    private readonly practitionerVideoBroadcastRepository: PractitionerVideoBroadcastRepository;


    public async saveBroadcastVideo(data: IVideoBroadcast): Promise<IVideoBroadcast> {
        try {
          return await this.videoBroadcastRepository.saveBroadcastVideo(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
    }

    public async getOneVideoRecord(data: IFindVideoBroadcast | any): Promise<IVideoBroadcast> {
        try {
          return await this.videoBroadcastRepository.getOneBroadcastVideo(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
    }
    
    public async getAllVideoRecords(user_id: string): Promise<IVideoBroadcast[]> {
        try {
          return await this.videoBroadcastRepository.getAllBroadcastVideos(user_id);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
    }

    public async assignBroadcastVideoToPractitioner(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
        const videoBroadcasts: VideoBroadcastModel = await this.videoBroadcastRepository.fetchBroadcastByID(data.video_broadcast_id);
        if ( !videoBroadcasts ) {
            throw new NotFoundError("video broadcasts not found");
        }

        try {
          return await this.practitionerVideoBroadcastRepository.savePractitionerBroadcastVideo(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
    }
}