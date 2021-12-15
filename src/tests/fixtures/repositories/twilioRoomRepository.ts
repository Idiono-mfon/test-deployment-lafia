import { injectable } from 'inversify';
import { ITwilioRoom } from '../../../app/models';
import { TestBaseRepository } from './baseRepository';


const twilioRoomData: ITwilioRoom[] = [
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
];

@injectable()
export class TestTwilioRoomRepository extends TestBaseRepository {
  constructor() {
    super(twilioRoomData);
  }
}
