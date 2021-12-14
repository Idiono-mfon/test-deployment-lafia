import { injectable } from 'inversify';
import uuid from 'uuid';
import { ITwilioRoom } from '../../../app/models';


@injectable()
export class TestTwilioRoomRepository {
  private twilioRoomData: ITwilioRoom[] = [
    {
      id: 'e59d4aee-3f4e-461a-9057-ba4677d9b057',
      room_sid: 'RM1432',
      recording_sid: 'RT1432',
    },
    {
      id: 'e59d4aee-3f4e-461a-9057-ba4677d9b058',
      room_sid: 'RM5421',
      recording_sid: 'RT5421',
    },
  ]

  async saveRoom(twilioRoom: ITwilioRoom): Promise<ITwilioRoom> {
    twilioRoom.created_at = new Date();
    twilioRoom.updated_at = new Date();
    twilioRoom.id = uuid.v4();

    this.twilioRoomData.push(twilioRoom);

    return Promise.resolve(twilioRoom);
  }

  async getOneRoom(data: any): Promise<ITwilioRoom> {
    const twilioRoom = this.twilioRoomData.filter(twilioRoom => {
      let isMatch = false;
      // eslint-disable-next-line @typescript-eslint/no-for-in-array
      for (const key of Object.keys(data)) {
        // @ts-ignore
        isMatch = twilioRoom[key] === data[key];
      }

      if (isMatch) {
        return twilioRoom;
      }

      return null;
    });

    return Promise.resolve(twilioRoom[0]);
  }

  async getAllRooms(): Promise<ITwilioRoom[]> {
    return Promise.resolve(this.twilioRoomData);
  }

  async fetchRoomByID(id: string): Promise<ITwilioRoom> {

    return this.getOneRoom({ id });
  }
}
