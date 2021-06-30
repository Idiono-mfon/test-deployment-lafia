import twilio, { jwt } from 'twilio';
import { v4 as uuidV4 } from 'uuid';
import { Env } from '../../config/env';
import { GenericResponseError } from '../../utils';

const env = Env.all();
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;
const twilioClient = twilio(
  env.twilio_account_sid,
  env.twilio_auth_token
)

export class TwilioService {
  public generateAccessToken(identity: string, roomId: string): string {
    try {
      const videoGrant = new VideoGrant({
        room: roomId
      });

      const token = new AccessToken(
        env.twilio_account_sid,
        env.twilio_api_key,
        env.twilio_api_secret,
        { identity }
      );
      token.addGrant(videoGrant);

      return token.toJwt();

    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public static async createRoom(): Promise<string> {
    try {
      const room = await twilioClient
        .video.rooms
        .create({
          uniqueName: uuidV4(),
          recordParticipantsOnConnect: true,
        });

      return room?.sid;
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
}
