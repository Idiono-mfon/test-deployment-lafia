import { injectable } from 'inversify';
import { BaseRepository, DbAccess } from '../base';
import { InternalServerError, logger } from '../../utils';
import { IFindPractitionerVideoBroadcast, PractitionerVideoBroadcastModel } from '../../models';

@injectable()
export class PractitionerVideoBroadcastRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(PractitionerVideoBroadcastModel);
  }

  public async findAll<T = string>(user_id: T): Promise<IFindPractitionerVideoBroadcast[]> {
    logger.info('Running PractitionerVideoBroadcastRepository.findAll');
    try {
      return await PractitionerVideoBroadcastModel.query()
        .where({ practitioner_id: user_id })
        .withGraphFetched(`[video_broadcasts]`);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
