import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  ITwilioRoom,
} from '../../models';
import { TwilioRoomRepository } from '../../repository/videoRecords/twilioRoomRepository';
import { InternalServerError } from '../../utils';

@injectable()
export class TwilioRoomService {
  @inject(TYPES.TwilioRoomRepository)
  private readonly twilioRoomRepository: TwilioRoomRepository;


  public async saveRoom(data: ITwilioRoom): Promise<ITwilioRoom> {
    try {
      return await this.twilioRoomRepository.saveRoom(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneRoom(data: ITwilioRoom | any): Promise<ITwilioRoom> {
    try {
      return await this.twilioRoomRepository.getOneRoom(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getAllRooms(user_id: string): Promise<ITwilioRoom[]> {
    try {
      return await this.twilioRoomRepository.getAllRooms(user_id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}
