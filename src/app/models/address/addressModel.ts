import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
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
  postal_code!: IAddress['postal_code'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.address}`;
  }

  static get jsonSchema(): JSONSchema {
    return AddressValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select(
          'use',
          'type',
          'text',
          'line',
          'city',
          'district',
          'state',
          'postal_code',
          'country',
        );
      }
    }
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

      patient_contact: {
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
