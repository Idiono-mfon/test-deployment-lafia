import { JSONSchema, RelationMappings } from 'objection';
import { BaseModel } from '../base';
import { Schema, Table } from '../../../database';
import { IPatientsCommunication } from './interfaces';
import { PatientsCommunicationValidation } from './validation';

export class PatientsCommunicationModel extends BaseModel implements IPatientsCommunication {
  patient_id!: IPatientsCommunication['patient_id'];
  communication_id!: IPatientsCommunication['communication_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_communications}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsCommunicationValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_communications}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      communication: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../communications',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_attachments}.communication_id`,
          to: `${Schema.lafiaService}.${Table.communications}.id`
        }
      },
    }
  }
}
