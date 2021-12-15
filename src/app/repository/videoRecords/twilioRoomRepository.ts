import { injectable } from 'inversify';
import { ITwilioRoom, TwilioRoomModel, } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';

@injectable()
export class TwilioRoomRepository extends BaseRepository {

  constructor() {
    super(TwilioRoomModel);
  }

  public async findAll<T = string>(user_id: T): Promise<ITwilioRoom[]> {
    logger.info('Running TwilioRoomRepository.findAll');
    try {
      return await TwilioRoomModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
