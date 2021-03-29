import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsReference } from './interfaces';
import { PatientsReferenceValidation } from './validation';

export class PatientsReferenceModel extends BaseModel implements IPatientsReference {
  patient_id!: IPatientsReference['patient_id'];
  reference_id!: IPatientsReference['reference_id'];

  static get tableName(): string {
    return`${Schema.lafiaService}.${Table.patients_references}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsReferenceValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_references}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      reference: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_references}.reference_id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },
    }
  }
}
