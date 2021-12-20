import { injectable } from 'inversify';
import { BaseRepository, DbAccess } from '../base';
import { InternalServerError, logger } from '../../utils';
import { IVideoRecord, VideoRecordModel } from '../../models';

@injectable()
export class VideoRecordRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(VideoRecordModel);
  }

  public async findAll<T = string>(user_id: T): Promise<IVideoRecord[]> {
    logger.info('Running VideoRecordRepository.findAll');

    try {
      return await VideoRecordModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
