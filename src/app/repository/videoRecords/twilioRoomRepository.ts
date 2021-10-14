import { injectable } from 'inversify';
import { ITwilioRoom, TwilioRoomModel, } from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class TwilioRoomRepository {

  public async fetchRoomByID(roomId: string) {
    logger.info('Running TwilioRoomRepository::fetchRoomByID');
    return TwilioRoomModel.query().findById(roomId);
  }

  public async saveRoom(data: ITwilioRoom): Promise<ITwilioRoom> {
    logger.info('Running TwilioRoomRepository::saveRoom');
    try {
      return await TwilioRoomModel.query()
        .insert(data)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneRoom(data: ITwilioRoom | any): Promise<ITwilioRoom> {
    logger.info('Running TwilioRoomRepository::getOneRoom');
    try {
      return await TwilioRoomModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllRooms(user_id: string): Promise<ITwilioRoom[]> {
    logger.info('Running TwilioRoomRepository::getAllRooms');
    try {
      return await TwilioRoomModel.query().where({ patient_id: user_id });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
