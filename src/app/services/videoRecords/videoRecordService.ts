import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { DbAccess } from '../../repository';
import { InternalServerError, logger } from '../../utils';
import { IFindVideoRecord, IVideoRecord } from '../../models';
import { IVideoRecordService } from './interfaces';

@injectable()
export class VideoRecordService implements IVideoRecordService {
  @inject(TYPES.VideoRecordRepository)
  private readonly videoRecordRepo: DbAccess;

  public async create(data: IVideoRecord): Promise<IVideoRecord> {
    logger.info('Running VideoRecordService.create');
    try {
      return await this.videoRecordRepo.create(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findOne(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    logger.info('Running VideoRecordService.findOne');
    try {
      return await this.videoRecordRepo.findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findAll(user_id: string): Promise<IVideoRecord[]> {
    logger.info('Running VideoRecordService.findAll');
    try {
      return await this.videoRecordRepo.findAll(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async delete(id: string): Promise<IVideoRecord> {
    logger.info('Running VideoRecordService.delete');
    try {
      return await this.videoRecordRepo.delete(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async update(id: string, data: IFindVideoRecord): Promise<any> {
    logger.info('Running VideoRecordService.update');
    try {
      return await this.videoRecordRepo.update(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
