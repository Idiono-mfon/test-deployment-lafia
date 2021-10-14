import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  IVideoBroadcast,
  IFindVideoBroadcast,
  VideoBroadcastModel,
  IPractitionerVideoBroadcast,
} from '../../models';
import {
  VideoBroadcastRepository,
  PractitionerVideoBroadcastRepository
} from '../../repository';
import { InternalServerError, logger, NotFoundError } from '../../utils';

@injectable()
export class VideoBroadcastService {
  @inject(TYPES.VideoBroadcastRepository)
  private readonly videoBroadcastRepository: VideoBroadcastRepository;

  @inject(TYPES.PractitionerVideoBroadcastRepository)
  private readonly practitionerVideoBroadcastRepository: PractitionerVideoBroadcastRepository;


  public async saveBroadcastVideo(data: IVideoBroadcast): Promise<IVideoBroadcast> {
    logger.info('Running VideoBroadcastService.saveBroadcastVideo');
    try {
      return await this.videoBroadcastRepository.saveBroadcastVideo(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneVideoRecord(data: IFindVideoBroadcast | any): Promise<IVideoBroadcast> {
    logger.info('Running VideoBroadcastService.getOneVideoRecord');
    try {
      return await this.videoBroadcastRepository.getOneBroadcastVideo(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllVideoRecords(user_id: string): Promise<IVideoBroadcast[]> {
    logger.info('Running VideoBroadcastService.getAllVideoRecords');
    try {
      return await this.videoBroadcastRepository.getAllBroadcastVideos(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteVideoBroadcastRecords(id: string): Promise<any> {
    logger.info('Running VideoBroadcastService.deleteVideoBroadcastRecords');
    try {
      return await this.videoBroadcastRepository.deleteBroadcastVideos(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllPractitionerBroadcastVideos(user_id: string): Promise<any> {
    logger.info('Running VideoBroadcastService.getAllPractitionerBroadcastVideos');
    try {
      return await this.practitionerVideoBroadcastRepository.getAllPractitionerBroadcastVideos(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async assignBroadcastVideoToPractitioner(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
    logger.info('Running VideoBroadcastService.assignBroadcastVideoToPractitioner');
    const videoBroadcasts: VideoBroadcastModel = await this.videoBroadcastRepository.fetchBroadcastByID(data.video_broadcast_id);
    if (!videoBroadcasts) {
      throw new NotFoundError('video broadcasts not found');
    }

    try {
      return await this.practitionerVideoBroadcastRepository.savePractitionerBroadcastVideo(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deletePractitionerBroadcastVideo(id: string): Promise<IPractitionerVideoBroadcast> {
    logger.info('Running VideoBroadcastService.deletePractitionerBroadcastVideo');
    const videoBroadcasts: VideoBroadcastModel = await this.videoBroadcastRepository.fetchBroadcastByID(id);
    if (!videoBroadcasts) {
      throw new NotFoundError('video broadcasts not found');
    }

    try {
      return await this.practitionerVideoBroadcastRepository.deletePractitionerBroadcastVideos(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
