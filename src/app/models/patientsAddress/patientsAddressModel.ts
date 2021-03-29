import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientsAddress } from './interfaces';
import { PatientsAddressValidation } from './validation';

export class PatientsAddressModel extends BaseModel implements IPatientsAddress {
  patient_id!: IPatientsAddress['patient_id'];
  address_id!: IPatientsAddress['address_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients_address}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientsAddressValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      patient: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../patients',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_address}.patient_id`,
          to: `${Schema.lafiaService}.${Table.patients}.id`
        }
      },

      address: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.patients_address}.address_id`,
          to: `${Schema.lafiaService}.${Table.address}.id`
        }
      },
    }
  }
}
