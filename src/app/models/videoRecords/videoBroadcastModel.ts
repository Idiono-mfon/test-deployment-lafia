import { JSONSchema, Model } from 'objection';
import { Schema, Table } from '../../../database';
import { IVideoBroadcast } from './interfaces';
import { VideoBroadcastValidation } from './validation';

export class VideoBroadcastModel extends Model implements IVideoBroadcast {
  description: IVideoBroadcast['description'];
  initiate_care?: IVideoBroadcast['initiate_care'];
  initiateCare?: IVideoBroadcast['initiateCare'];
  videoUrl?: IVideoBroadcast['videoUrl'];
  video_url?: IVideoBroadcast['video_url'];
  patient_id: IVideoBroadcast['patient_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.video_broadcasts}`;
  }

  static get jsonSchema(): JSONSchema {
    return VideoBroadcastValidation;
  }
}
