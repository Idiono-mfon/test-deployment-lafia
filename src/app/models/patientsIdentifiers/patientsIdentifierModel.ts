import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsIdentifier } from './interfaces';
import { PatientsIdentifierValidation } from './validation';

export class PatientsIdentifierModel extends BaseModel implements IPatientsIdentifier {
  patient_id!: IPatientsIdentifier['patient_id'];
  identifier_id!: IPatientsIdentifier['identifier_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_identifiers}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsIdentifierValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_identifiers}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      identifier: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_identifiers}.identifier_id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },
    }
  }
}
