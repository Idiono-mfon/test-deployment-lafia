import { injectable } from 'inversify';
import { BaseRepository, DbAccess } from '../base';
import { InternalServerError, logger } from '../../utils';
import { IFindVideoBroadcast, VideoBroadcastModel, } from '../../models';

@injectable()
export class VideoBroadcastRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(VideoBroadcastModel);
  }

  public async findAll<T = string>(user_id: T): Promise<IFindVideoBroadcast[]> {
    logger.info('Running VideoBroadcastRepository.findAll');

    try {
      return await VideoBroadcastModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
