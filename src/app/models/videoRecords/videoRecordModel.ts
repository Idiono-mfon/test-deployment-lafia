import { JSONSchema, Model } from 'objection';
import { Schema, Table } from '../../../database';
import { IVideoRecord } from './interfaces';
import { VideoRecordValidation } from './validation';

export class VideoRecordModel extends Model implements IVideoRecord {
  streamId!: IVideoRecord['streamId'];
  vodId!: IVideoRecord['vodId'];
  patientId!: IVideoRecord['patientId'];
  patient_id!: IVideoRecord['patient_id'];
  streamUrl!: IVideoRecord['streamUrl'];
  stream_url!: IVideoRecord['stream_url'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.video_records}`;
  }

  static get jsonSchema(): JSONSchema {
    return VideoRecordValidation;
  }
}
