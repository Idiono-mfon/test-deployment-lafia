import { injectable } from 'inversify';
import { InternalServerError } from '../../utils';
import { IFindVideoRecord, IVideoRecord, VideoRecordModel } from '../../models';

@injectable()
export class VideoRecordRepository {

  public async saveRecordedStream(data: IVideoRecord): Promise<IVideoRecord> {
    try {
      return await VideoRecordModel.query()
        .insert(data)
        .returning('*');
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneVideoRecord(data: IFindVideoRecord | any): Promise<IVideoRecord> {
    try {
      return await VideoRecordModel.query().findOne(data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateVideoRecord(id: string, data: IFindVideoRecord): Promise<any> {
    try {
      return await VideoRecordModel.query()
        .patchAndFetchById(id, data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}