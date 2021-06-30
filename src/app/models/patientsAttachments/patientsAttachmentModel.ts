import { BaseModel } from '../base';
import { Schema, Table } from '../../../database';
import { IPatientsAttachment } from './interfaces';
import { JSONSchema, RelationMappings } from 'objection';
import { PatientsAttachmentValidation } from './validation';

export class PatientsAttachmentModel extends BaseModel implements IPatientsAttachment {
  patientId!: IPatientsAttachment['patientId'];
  attachmentId!: IPatientsAttachment['attachmentId'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_attachments}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsAttachmentValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_attachments}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      attachment: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../attachments',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_attachments}.attachment_id`,
          to: `${Schema.lafiaService}.${Table.attachments}.id`
        }
      },
    }
  }
}
