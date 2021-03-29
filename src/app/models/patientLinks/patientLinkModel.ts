import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientLink } from './interfaces';
import { PatientLinkValidation } from './validation';

export class PatientLinkModel extends BaseModel implements IPatientLink {
  other!: IPatientLink['other'];
  type!: IPatientLink['type'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patient_links}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientLinkValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      other: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_links}.reference_id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      }
    }
  }
}
