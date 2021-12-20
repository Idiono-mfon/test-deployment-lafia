import { inject, injectable } from 'inversify';
import twilio, { jwt, Twilio } from 'twilio';
import { Env, IEnv } from '../../config/env';
import TYPES from '../../config/types';
import { ITwilioRoom } from '../../models';
import { IUserRepository } from '../../repository';
import { ITwilioRoomService } from '../videoRecords';
import { ITwilioService, RoomParticipants, TwilioOTP, TwilioToken } from './interfaces';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';

@injectable()
export class TwilioService implements ITwilioService {

  private readonly env: IEnv;
  private readonly twilioClient: Twilio;

  @inject(TYPES.UserRepository)
  private userRepository: IUserRepository;
  @inject(TYPES.TwilioRoomService)
  private readonly twilioRoomService: ITwilioRoomService;

  constructor() {
    this.env = Env.all();

    this.twilioClient = twilio(
      this.env.twilio_account_sid,
      this.env.twilio_auth_token
    );
  }

  public async generateAccessToken(identity: string, roomId: string, newRoom = false): Promise<TwilioToken> {
    logger.info('Running TwilioService.generateAccessToken');
    try {

      let newRoomId = roomId;

      if (newRoom) {
        try {
          await this.createRoom(newRoomId);
        } catch (e: any) {
          throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
      }

      const { AccessToken } = jwt;
      const { VideoGrant } = AccessToken;

      const videoGrant = new VideoGrant({
        room: newRoomId
      });

      const token = new AccessToken(
        this.env.twilio_account_sid,
        this.env.twilio_api_key,
        this.env.twilio_api_secret,
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

  public async createRoom(roomName: string): Promise<string> {
    logger.info('Running TwilioService.createRoom');
    try {
      const room = await this.twilioClient
        .video.rooms
        .create({
          uniqueName: roomName,
          type: 'group',
        });

      const roomSid = room?.sid;

      await this.twilioClient.video.rooms(roomSid)
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
      const room = await this.twilioClient
        .video.rooms(roomId)
        .update({ status: 'completed' });

      return room?.sid;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getParticipantsByRoomSid(roomSid: string): Promise<RoomParticipants> {
    logger.info('Running TwilioService.getParticipantsByRoomSid');
    try {
      const room = await this.twilioClient.video
        .rooms(roomSid)
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
      const twilioRecordResponse = await this.twilioClient.request({ method: 'GET', uri });

      return twilioRecordResponse?.body?.redirect_to;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async composeRecordingMedia(roomId: string): Promise<string> {
    logger.info('Running TwilioService.composeRecordingMedia');
    try {
      const composition = await this.twilioClient.video.compositions.create({
        roomSid: roomId,
        audioSources: '*',
        videoLayout: {
          grid: {
            video_sources: ['*']
          }
        },
        statusCallback: this.env.twilio_composition_callback,
        format: 'mp4'
      })

      return composition.sid;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getVideoRecordingFile(compositionSid: string): Promise<string> {
    logger.info('Running TwilioService.getVideoRecordingFile');
    try {
      const uri =
        'https://video.twilio.com/v1/Compositions/' +
        compositionSid +
        '/Media';

      const compositionFileResponse = await this.twilioClient.request({ method: 'GET', uri })

      return compositionFileResponse?.body?.redirect_to;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async sendOTP(phone: string): Promise<TwilioOTP> {
    logger.info('Running TwilioService.sendOTP');

    const sid = this.env.twilio_verify_sid;
    try {
      const { to, channel, status, valid } = await this.twilioClient.verify
        .services(sid)
        .verifications
        .create({ to: phone, channel: 'sms' });

      return { to, channel, status, valid };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.status);
    }

  }

  public async verifyOTP(phone: string, code: string): Promise<TwilioOTP> {
    logger.info('Running TwilioService.verifyOTP');
    const sid = this.env.twilio_verify_sid;
    try {
      const { to, channel, status, valid } = await this.twilioClient.verify
        .services(sid)
        .verificationChecks
        .create({ to: phone, code });

      return { to, channel, status, valid };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.status);
    }
  }

  public async triggerMediaComposition(twilioRoom: ITwilioRoom, event: any): Promise<void> {
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
