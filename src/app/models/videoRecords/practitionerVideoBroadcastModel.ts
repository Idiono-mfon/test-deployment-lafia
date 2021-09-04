import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionerVideoBroadcast } from './interfaces';
import { PractitionerVideoBroadcastValidation } from './validation';

export class PractitionerVideoBroadcastModel extends BaseModel implements IPractitionerVideoBroadcast {
  practitioner_id: IPractitionerVideoBroadcast['practitioner_id'];
  video_broadcast_id: IPractitionerVideoBroadcast['video_broadcast_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioner_video_broadcasts}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionerVideoBroadcastValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      videoBroadcast: {
        relation: BaseModel.HasOneRelation,
        modelClass: './videoBroadcastModel',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioner_video_broadcasts}.video_broadcast_id`,
          to: `${Schema.lafiaService}.${Table.video_broadcasts}.id`
        }
      }
    }
  }
}
