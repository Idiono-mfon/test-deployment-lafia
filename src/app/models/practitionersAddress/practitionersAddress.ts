import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionersAddress } from './interfaces';
import { PractitionersAddressValidation } from './validation';

export class PractitionersAddressModel extends BaseModel implements IPractitionersAddress {
  practitioner_id!: IPractitionersAddress['practitioner_id'];
  address_id!: IPractitionersAddress['address_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_address}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersAddressValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_address}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      address: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_address}.address_id`,
          to: `${Schema.lafiaService}.${Table.address}.id`
        }
      },
    }
  }
}
