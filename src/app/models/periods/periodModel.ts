import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPeriod } from './interfaces';
import { PeriodValidation } from './validation';

export class PeriodModel extends BaseModel implements IPeriod {
  start!: IPeriod['start'];
  end!: IPeriod['end'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.periods}`;
  }

  static get jsonSchema(): JSONSchema {
    return PeriodValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select('start', 'end');
      }
    }
  }

  static get relationMappings(): RelationMappings {
    return {
      address: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.periods}.id`,
          to: `${Schema.lafiaService}.${Table.address}.period_id`
        }
      },

      contact_points: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.periods}.id`,
          to: `${Schema.lafiaService}.${Table.contact_points}.period_id`
        }
      },

      human_name: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.periods}.id`,
          to: `${Schema.lafiaService}.${Table.human_names}.period_id`
        }
      },

      identifier: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.periods}.id`,
          to: `${Schema.lafiaService}.${Table.identifiers}.period_id`
        }
      },

      patient_contact: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.periods}.id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.period_id`
        }
      },
    }
  }
}
