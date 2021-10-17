import { injectable } from 'inversify';
import { InternalServerError, logger } from '../../utils';
import { IFindVideoRecord, IVideoRecord, VideoRecordModel } from '../../models';

@injectable()
export class VideoRecordRepository {

  public async saveRecordedStream(data: IVideoRecord): Promise<IVideoRecord> {
    logger.info('Running VideoRecordRepository::saveRecordedStream');
    try {
      return await VideoRecordModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneVideoRecord(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    logger.info('Running VideoRecordRepository::getOneVideoRecord');
    try {
      return await VideoRecordModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllVideoRecords(user_id: string): Promise<IVideoRecord[]> {
    logger.info('Running VideoRecordRepository::getAllVideoRecords');
    try {
      return await VideoRecordModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteVideoRecord(id: string): Promise<any> {
    logger.info('Running VideoRecordRepository::deleteVideoRecord');
    try {
      return await VideoRecordModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateVideoRecord(id: string, data: IFindVideoRecord): Promise<any> {
    logger.info('Running VideoRecordRepository::updateVideoRecord');
    try {
      return await VideoRecordModel.query()
        .patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
