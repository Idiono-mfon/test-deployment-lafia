import { inject, injectable } from 'inversify';
import twilio, { jwt } from 'twilio';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { ITwilioRoom } from '../../models';
import { IUserRepository } from '../../repository';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';
import { TwilioRoomService } from '../videoRecords';

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
  private userRepository: IUserRepository;
  @inject(TYPES.TwilioRoomService)
  private readonly twilioRoomService: TwilioRoomService;

  public async generateAccessToken(identity: string, roomId: string, newRoom = false): Promise<{ roomId: string, token: string }> {
    logger.info('Running TwilioService.generateAccessToken');
    try {

      let newRoomId = roomId;

      if (newRoom) {
        try {
          await TwilioService.createRoom(newRoomId);
        } catch (e: any) {
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

    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public static async createRoom(roomName: string): Promise<string> {
    logger.info('Running TwilioService.createRoom');
    try {
      const room = await twilioClient
        .video.rooms
        .create({
          uniqueName: roomName,
          type: 'group',
        });

      const roomSid = room?.sid;

      await twilioClient.video.rooms(roomSid)
        .recordingRules
        .update({ rules: [{ 'type': 'include', 'all': true }] });

      return roomSid;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }

  }

  public async closeRoomOnCallEnd(roomId: string): Promise<string> {
    logger.info('Running TwilioService.closeRoomOnCallEnd');
    try {
      const room = await twilioClient
        .video.rooms(roomId)
        .update({ status: 'completed' });

      return room?.sid;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getParticipantsByRoomSid(roomSid: string) {
    logger.info('Running TwilioService.getParticipantsByRoomSid');
    try {
      const room = await twilioClient.video.rooms(roomSid)
        .fetch();

      const [, participants] = room?.uniqueName?.split(':');
      const [practitioner, ...patients] = participants?.split('-');

      return { practitioner, patients, };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getVideoRecording(recordingSid: string): Promise<string | any> {
    logger.info('Running TwilioService.getVideoRecording');
    try {
      const uri = `https://video.twilio.com/v1/Recordings/${recordingSid}/Media`;
      const twilioRecordResponse = await twilioClient.request({ method: 'GET', uri });

      return twilioRecordResponse?.body?.redirect_to;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async composeRecordingMedia(roomId: string) {
    logger.info('Running TwilioService.composeRecordingMedia');
    try {
      const composition = await twilioClient.video.compositions.create({
        roomSid: roomId,
        audioSources: '*',
        videoLayout: {
          grid: {
            video_sources: ['*']
          }
        },
        statusCallback: 'https://api.lafia.io/media/events',
        format: 'mp4'
      })

      return composition.sid;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getVideoRecordingFile(compositionSid: string) {
    logger.info('Running TwilioService.getVideoRecordingFile');
    try {
      const uri =
        'https://video.twilio.com/v1/Compositions/' +
        compositionSid +
        '/Media';

      const compositionFileResponse = await twilioClient.request({ method: 'GET', uri })

      return compositionFileResponse?.body?.redirect_to;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async sendOTP(phone: string): Promise<any> {
    logger.info('Running TwilioService.sendOTP');

    const sid = env.twilio_verify_sid;
    try {
      const { to, channel, status, valid } = await twilioClient.verify
        .services(sid)
        .verifications
        .create({ to: phone, channel: 'sms' });
      //.then(verification => console.log(verification.status));
      return { to, channel, status, valid };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.status);
    }

  }

  public async verifyOTP(phone: string, code: string): Promise<any> {
    logger.info('Running TwilioService.verifyOTP');
    const sid = env.twilio_verify_sid;
    try {
      const { to, channel, status, valid } = await twilioClient.verify
        .services(sid)
        .verificationChecks
        .create({ to: phone, code });

      return { to, channel, status, valid };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.status);
    }
  }

  public async triggerMediaComposition(twilioRoom: ITwilioRoom, event: any) {
    logger.info('Running TwilioService.triggerMediaComposition');
    if (!twilioRoom?.room_sid) {
      try {
        await this.twilioRoomService.create({
          room_sid: event?.RoomSid,
          recording_sid: event?.RecordingSid
        });
      } catch (e: any) {
        return;
      }
      await this.composeRecordingMedia(event?.RoomSid);
    }
  }
}
