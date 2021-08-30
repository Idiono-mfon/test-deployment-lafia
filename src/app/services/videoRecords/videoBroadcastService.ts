import { inject, injectable } from "inversify";
import TYPES from "../../config/types";
import { IFindVideoBroadcast, IVideoBroadcast } from "../../models";
import { VideoBroadcastRepository } from "../../repository";
import { InternalServerError } from "../../utils";

@injectable()
export class VideoBroadcastService {
    @inject(TYPES.VideoBroadcastRepository)
    private readonly videoBroadcastRepository: VideoBroadcastRepository;

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
}