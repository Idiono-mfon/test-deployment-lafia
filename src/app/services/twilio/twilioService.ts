import { inject, injectable } from 'inversify';
import twilio, { jwt } from 'twilio';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { UserRepository } from '../../repository';
import { GenericResponseError, HttpStatusCode } from '../../utils';

const env = Env.all();
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;
const twilioClient = twilio(
  env.twilio_account_sid,
  env.twilio_auth_token
)

@injectable()
export class TwilioService {

  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;
  
  public async generateAccessToken(identity: string, roomId: string, newRoom = false): Promise<{ roomId: string, token: string }> {
    try {

      let newRoomId = roomId;

      if (newRoom) {
        try {
          await TwilioService.createRoom(newRoomId);
        } catch (e) {
          console.log('Error creating room');
          throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
      }

      const videoGrant = new VideoGrant({
        room: newRoomId
      });

      const token = new AccessToken(
        env.twilio_account_sid,
        env.twilio_api_key,
        env.twilio_api_secret,
      );
      token.identity = identity;
      token.addGrant(videoGrant);

      return {
        roomId: newRoomId,
        token: token.toJwt(),
      };

    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public static async createRoom(roomName: string): Promise<string> {
    try {
      const room = await twilioClient
        .video.rooms
        .create({
          uniqueName: roomName,
          type: 'group',
          recordParticipantsOnConnect: true,
        });

      const roomSid = room?.sid;

      // const rc = await twilioClient.video.rooms(roomSid)
      //   .recordingRules
      //   .update({ rules: [{ 'type': 'include', 'all': true }] });
      //
      // console.log('RC:', rc);

      return roomSid;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }

  }

  public async closeRoomOnCallEnd(roomId: string): Promise<string> {
    try {
      const room = await twilioClient
        .video.rooms(roomId)
        .update({ status: 'completed' });

      return room?.sid;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async sendOTP(phone: string): Promise<any> {

    const sid = env.twilio_verify_sid;
    try {
      const { to, channel, status, valid } = await twilioClient.verify
        .services(sid)
        .verifications
        .create({ to: phone, channel: 'sms' });
      //.then(verification => console.log(verification.status));
      return { to, channel, status, valid };
    } catch (e) {
      throw new GenericResponseError(e.message, e.status);
    }

  }

  public async verifyOTP(phone: string, code: string): Promise<any> {
    const sid = env.twilio_verify_sid;
    try {
      const {to, channel, status, valid} = await twilioClient.verify
      .services(sid)
      .verificationChecks
      .create({to: phone, code});
      // if (status === "approved") {
      //   let user: IUser = await this.userRepository.getOneUser({ phone });
      //   const userId: string | any = user.id;
      //   this.userRepository.updateUser(userId, {hasVerifiedPhone: true});
      // }
      //.then(verification_check => console.log(verification_check.status));
      return {to, channel, status, valid};
    } catch (e) {
      console.log(e)
      throw new GenericResponseError(e.message, e.status);
    }
  }
}
