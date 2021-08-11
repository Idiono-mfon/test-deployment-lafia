import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { VideoRecordRepository } from '../../repository';
import { InternalServerError } from '../../utils';
import { IFindVideoRecord, IVideoRecord } from '../../models';

@injectable()
export class VideoRecordService {
  @inject(TYPES.VideoRecordRepository)
  private readonly videoRecordRepo: VideoRecordRepository;

  public async saveRecordedStream(data: IVideoRecord): Promise<IVideoRecord> {
    try {
      return await this.videoRecordRepo.saveRecordedStream(data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneVideoRecord(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    try {
      return await this.videoRecordRepo.getOneVideoRecord(data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllVideoRecords(user_id: string): Promise<IVideoRecord[]> {
    try {
      return await this.videoRecordRepo.getAllVideoRecords(user_id);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteVideoRecord(id: string): Promise<IVideoRecord> {
    try {
      return await this.videoRecordRepo.deleteVideoRecord(id);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateVideoRecord(id: string, data: IFindVideoRecord): Promise<any> {
    try {
      return await this.videoRecordRepo.updateVideoRecord(id, data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
