import { ITwilioRoom } from '../../../models';

export interface ITwilioService {
  generateAccessToken(identity: string, roomId: string, newRoom?: boolean): Promise<TwilioToken>;

  closeRoomOnCallEnd(roomId: string): Promise<string>;

  getParticipantsByRoomSid(roomSid: string): Promise<RoomParticipants>;

  getVideoRecording(recordingSid: string): Promise<string | any>;

  composeRecordingMedia(roomId: string): Promise<string>;

  getVideoRecordingFile(compositionSid: string): Promise<string>;

  sendOTP(phone: string): Promise<TwilioOTP>;

  verifyOTP(phone: string, code: string): Promise<TwilioOTP>;

  triggerMediaComposition(twilioRoom: ITwilioRoom, event: any): Promise<void>;
}

export interface TwilioToken {
  roomId: string;
  token: string;
}

export interface RoomParticipants {
  patients: string[];
  practitioner: string;
}

export interface TwilioOTP {
  to: string;
  channel: string;
  status: string;
  valid: boolean;
}
