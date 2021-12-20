import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  IVideoBroadcast,
  IFindVideoBroadcast,
  VideoBroadcastModel,
  IPractitionerVideoBroadcast,
} from '../../models';
import { DbAccess } from '../../repository';
import { InternalServerError, logger, NotFoundError } from '../../utils';
import { IVideoBroadcastService } from './interfaces';

@injectable()
export class VideoBroadcastService implements IVideoBroadcastService {
  @inject(TYPES.VideoBroadcastRepository)
  private readonly videoBroadcastRepository: DbAccess;

  @inject(TYPES.PractitionerVideoBroadcastRepository)
  private readonly practitionerVideoBroadcastRepository: DbAccess;


  public async create(data: IVideoBroadcast): Promise<IVideoBroadcast> {
    logger.info('Running VideoBroadcastService.create');
    try {
      return await this.videoBroadcastRepository.create(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findOne(data: IFindVideoBroadcast | any): Promise<IVideoBroadcast> {
    logger.info('Running VideoBroadcastService.findOne');
    try {
      return await this.videoBroadcastRepository.findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findAll(user_id: string): Promise<IVideoBroadcast[]> {
    logger.info('Running VideoBroadcastService.findAll');
    try {
      return await this.videoBroadcastRepository.findAll(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async delete(id: string): Promise<any> {
    logger.info('Running VideoBroadcastService.delete');
    try {
      return await this.videoBroadcastRepository.delete(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findAllPractitionerBroadcastVideos(user_id: string): Promise<any> {
    logger.info('Running VideoBroadcastService.findAllPractitionerBroadcastVideos');
    try {
      return await this.practitionerVideoBroadcastRepository.findAll(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async assignBroadcastVideoToPractitioner(data: IPractitionerVideoBroadcast): Promise<IPractitionerVideoBroadcast> {
    logger.info('Running VideoBroadcastService.assignBroadcastVideoToPractitioner');
    const videoBroadcasts: VideoBroadcastModel = await this.videoBroadcastRepository.findById(data.video_broadcast_id);
    if (!videoBroadcasts) {
      throw new NotFoundError('video broadcasts not found');
    }

    try {
      return await this.practitionerVideoBroadcastRepository.create(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deletePractitionerBroadcastVideo(id: string): Promise<IPractitionerVideoBroadcast> {
    logger.info('Running VideoBroadcastService.deletePractitionerBroadcastVideo');

    const videoBroadcasts: VideoBroadcastModel = await this.videoBroadcastRepository.findById(id);

    if (!videoBroadcasts) {
      throw new NotFoundError('video broadcasts not found');
    }

    try {
      return await this.practitionerVideoBroadcastRepository.delete(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
