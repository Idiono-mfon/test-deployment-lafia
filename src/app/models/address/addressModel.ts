import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IAddress } from './interfaces';
import { AddressValidation } from './validation';

export class AddressModel extends BaseModel implements IAddress {
  use!: IAddress['use'];
  city!: IAddress['city'];
  type!: IAddress['type'];
  text!: IAddress['text'];
  line!: IAddress['line'];
  state!: IAddress['state'];
  period!: IAddress['period'];
  country!: IAddress['country'];
  district!: IAddress['district'];
  postalCode!: IAddress['postalCode'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.address}`;
  }

  static get jsonSchema(): JSONSchema {
    return AddressValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'periodId'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.address}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      period: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../periods',
        join: {
          from: `${Schema.lafiaService}.${Table.address}.period_id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      patientContact: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.address}.id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.address_id`
        }
      },
    }
  }
}
