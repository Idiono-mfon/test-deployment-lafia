import { injectable } from 'inversify';
import { ITwilioRoom, TwilioRoomModel, } from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class TwilioRoomRepository {

    public async fetchRoomByID(roomId: string){
      return TwilioRoomModel.query().findById(roomId);
    }

    public async saveRoom(data: ITwilioRoom): Promise<ITwilioRoom> {
        try {
          return await TwilioRoomModel.query()
            .insert(data)
            .returning('*');
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getOneRoom(data: ITwilioRoom | any): Promise<ITwilioRoom> {
        try {
          return await TwilioRoomModel.query().findOne(data);
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
    
      public async getAllRooms(user_id: string): Promise<ITwilioRoom[]> {
        try {
          return await TwilioRoomModel.query().where({ patient_id: user_id });
        } catch (e) {
          throw new InternalServerError(e.message);
        }
      }
}