import { inject, injectable } from 'inversify';
import TYPES from '../../../app/config/types';
import { ITwilioRoom } from '../../../app/models';
import { IUserRepository } from '../../../app/repository';
import { TwilioRoomService } from '../../../app/services';

@injectable()
export class TestTwilioService {
  private readonly otp = [{
    code: '1234',
    to: '+1234567890',
    channel: 'sms',
    status: 'success',
    valid: true,
  }];

  @inject(TYPES.UserRepository)
  private userRepository: IUserRepository;
  @inject(TYPES.TwilioRoomService)
  private readonly twilioRoomService: TwilioRoomService;

  public async generateAccessToken(identity: string, roomId: string, newRoom = false): Promise<{ roomId: string, token: string }> {
    let newRoomId = roomId;

    if (newRoom) {
      await TestTwilioService.createRoom(newRoomId);
    }

    return {
      roomId: newRoomId,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTQzMTkxOSwiYXVkIjoiZTQ1NjQzMmItODMzNS00YTA3LWExYTUtMzRmODYwZTJmMzNmIn0.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY',
    };
  }

  public static async createRoom(roomName: string): Promise<string> {
    return `12#${roomName}#21`;
  }

  public async closeRoomOnCallEnd(roomId: string): Promise<string> {
    return `RM23${roomId}93m`;
  }

  public async getParticipantsByRoomSid(roomSid: string) {

    if (roomSid || !roomSid) {
      // Avoid the unused parameter warning
    }

    return { practitioner: '14', patients: ['11', '22', '33'], };
  }

  public async getVideoRecording(recordingSid: string): Promise<string | any> {
    return `https://www.${recordingSid}.com`;
  }

  public async composeRecordingMedia(roomId: string) {
    return `https://www.${roomId}.com`;
  }

  public async getVideoRecordingFile(compositionSid: string) {
    return `https://www.${compositionSid}.com`;
  }

  public async sendOTP(phone: string): Promise<any> {
    const otp = {
      code: Math.random().toString().slice(2, 6),
      to: phone,
      channel: 'sms',
      status: 'success',
      valid: true,
    };

    this.otp.push(otp);

    return otp;
  }

  public async verifyOTP(phone: string, code: string): Promise<any> {
    const otp = this.otp.find(o => o.to === phone && o.code === code);

    if (!otp) {
      return {
        code,
        to: phone,
        channel: 'sms',
        status: 'fail',
        valid: false,
      };
    }

    return otp;
  }

  public async triggerMediaComposition(twilioRoom: ITwilioRoom, event: any) {
    if (!twilioRoom?.room_sid) {
      await this.twilioRoomService.create({
        room_sid: event?.RoomSid,
        recording_sid: event?.RecordingSid
      });

      await this.composeRecordingMedia(event?.RoomSid);
    }
  }
}
