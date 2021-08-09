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

  // private async recordStream(id: string) {
  //   try {
  //     const recordResponse: AxiosResponse = await axios.put(
  //       `${this.env.lafia_media_url}/rest/v2/broadcasts/${id}/recording/true?recordType=mp4`
  //     );
  //
  //     return recordResponse.data;
  //   } catch (e) {
  //     throw new GenericResponseError(e.message, e.code);
  //   }
  // }

  public async createBroadcast(patient_id: string) {
    try {
      const axiosResponse: AxiosResponse = await axios.post(
        `${this.env.lafia_media_url}/rest/v2/broadcasts/create`,
        { name: Types.ObjectId() }
      );

      const streamKey = axiosResponse?.data?.streamId;

      await this.videoRecordService.saveRecordedStream( { streamId: streamKey, patient_id });

      return {
        rtmp_url: `rtmp://media.lafia.io/LiveApp`,
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

  public async getOneVideoRecord(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    return this.videoRecordService.getOneVideoRecord(data);
  }

  public async updateVideoRecord(id: string, data: IFindVideoRecord): Promise<any> {
    return this.videoRecordService.updateVideoRecord(id, data);
  }
}