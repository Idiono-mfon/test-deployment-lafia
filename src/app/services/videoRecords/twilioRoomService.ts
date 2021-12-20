import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ITwilioRoom } from '../../models';
import { DbAccess } from '../../repository';
import { ITwilioRoomService } from './interfaces';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class TwilioRoomService implements ITwilioRoomService {
  @inject(TYPES.TwilioRoomRepository)
  private readonly twilioRoomRepository: DbAccess;

  public async create(data: ITwilioRoom): Promise<ITwilioRoom> {
    logger.info('Running TwilioRoomService.create');
    try {
      return await this.twilioRoomRepository.create(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findOne(data: ITwilioRoom | any): Promise<ITwilioRoom> {
    logger.info('Running TwilioRoomService.findOne');
    try {
      return await this.twilioRoomRepository.findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findAll(user_id: string): Promise<ITwilioRoom[]> {
    logger.info('Running TwilioRoomService.findAll');
    try {
      return await this.twilioRoomRepository.findAll(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}
