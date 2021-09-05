import axios, { AxiosResponse } from 'axios';
import { Types } from 'mongoose';
import { inject, injectable } from 'inversify';
import { Env, IEnv } from '../../config/env';
import { IFindVideoRecord, IVideoRecord } from '../../models';
import { GenericResponseError } from '../../utils';
import TYPES from '../../config/types';
import { VideoRecordService } from '../videoRecords';

@injectable()
export class LafiaMediaService {

  @inject(TYPES.VideoRecordService)
  private readonly videoRecordService: VideoRecordService;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async createBroadcast(patient_id: string) {
    try {
      const axiosResponse: AxiosResponse = await axios.post(
        `${this.env.lafia_media_url}/rest/v2/broadcasts/create`,
        { name: Types.ObjectId() }
      );

      const streamKey = axiosResponse?.data?.streamId;

      await this.videoRecordService.saveRecordedStream( { streamId: streamKey, patient_id });

      return {
        rtmp_url: `rtmp://media.lafia.io/WebRTCAppEE`,
        stream_key: `${streamKey}`,
      };
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getRecordedStream(id: string) {
    try {
      const axiosResponse: AxiosResponse = await axios.get(
        `${this.env.lafia_media_url}/rest/v2/vods/${id}`
      );
      return `${this.env.lafia_media_url}/${axiosResponse?.data?.filePath}`;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async addStreamUrlToPatientBroadcast(streamUrl: string, event: any) {
    if (streamUrl) {
      const videoRecord = await this.getOneVideoRecord({ streamId: event?.id });

      if (videoRecord) {
        await this.updateVideoRecord(videoRecord?.id!, {
          vodId: event?.vodId,
          stream_url: streamUrl
        });
      }
    }
  }

  public async getOneVideoRecord(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    return this.videoRecordService.getOneVideoRecord(data);
  }

  public async getAllVideoRecords(user_id: string): Promise<IVideoRecord[]> {
    return this.videoRecordService.getAllVideoRecords(user_id);
  }

  public async deleteVideoRecord(id: string): Promise<any> {
    return this.videoRecordService.deleteVideoRecord(id);
  }

  public async updateVideoRecord(id: string, data: IFindVideoRecord): Promise<any> {
    return this.videoRecordService.updateVideoRecord(id, data);
  }
}