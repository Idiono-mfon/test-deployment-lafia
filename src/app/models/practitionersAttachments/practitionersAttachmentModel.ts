import { BaseModel } from '../base';
import { Schema, Table } from '../../../database';
import { IPractitionersAttachment } from './interfaces';
import { JSONSchema, RelationMappings } from 'objection';
import { PractitionersAttachmentValidation } from './validation';

export class PractitionersAttachmentModel extends BaseModel implements IPractitionersAttachment {
  practitionerId!: IPractitionersAttachment['practitionerId'];
  attachmentId!: IPractitionersAttachment['attachmentId'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_attachments}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersAttachmentValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_attachments}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      attachment: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../attachments',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_attachments}.attachment_id`,
          to: `${Schema.lafiaService}.${Table.attachments}.id`
        }
      },
    }
  }
}
