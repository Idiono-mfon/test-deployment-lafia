import axios, { AxiosResponse } from 'axios';
import { Types } from 'mongoose';
import { inject, injectable } from 'inversify';
import { Env, IEnv } from '../../config/env';
import { IFindVideoRecord, IVideoRecord } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import TYPES from '../../config/types';
import { VideoRecordService } from '../videoRecords';
import { ILafiaMediaService, IStream } from './interfaces';

@injectable()
export class LafiaMediaService implements ILafiaMediaService {

  @inject(TYPES.VideoRecordService)
  private readonly videoRecordService: VideoRecordService;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async createBroadcast(patient_id: string): Promise<IStream> {
    logger.info('Running LafiaMediaService.createBroadcast');
    try {
      const axiosResponse: AxiosResponse = await axios.post(
        `${this.env.lafia_media_url}/rest/v2/broadcasts/create`,
        { name: Types.ObjectId() }
      );

      const streamKey = axiosResponse?.data?.streamId;

      await this.videoRecordService.create({ streamId: streamKey, patient_id });

      return {
        rtmp_url: `rtmp://media.lafia.io/WebRTCAppEE`,
        stream_key: `${streamKey}`,
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getRecordedStream(id: string): Promise<string> {
    logger.info('Running LafiaMediaService.getRecordedStream');

    try {
      const axiosResponse: AxiosResponse = await axios.get(
        `${this.env.lafia_media_url}/rest/v2/vods/${id}`
      );
      return `${this.env.lafia_media_url}/${axiosResponse?.data?.filePath}`;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async addStreamUrlToPatientBroadcast(streamUrl: string, event: any): Promise<void> {
    logger.info('Running LafiaMediaService.addStreamUrlToPatientBroadcast');

    if (streamUrl) {
      const videoRecord = await this.findOne({ streamId: event?.id });

      if (videoRecord) {
        await this.update(videoRecord?.id!, {
          vodId: event?.vodId,
          stream_url: streamUrl
        });
      }
    }
  }

  public async findOne(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    logger.info('Running LafiaMediaService.findOne');
    return this.videoRecordService.findOne(data);
  }

  public async findAll(user_id: string): Promise<IVideoRecord[]> {
    logger.info('Running LafiaMediaService.findAll');
    return this.videoRecordService.findAll(user_id);
  }

  public async delete(id: string): Promise<any> {
    logger.info('Running LafiaMediaService.delete');
    return this.videoRecordService.delete(id);
  }

  public async update(id: string, data: IFindVideoRecord): Promise<any> {
    logger.info('Running LafiaMediaService.update');
    return this.videoRecordService.update(id, data);
  }
}
