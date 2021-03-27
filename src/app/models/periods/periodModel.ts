import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPeriod } from './interfaces';
import { PeriodValidator } from './validation';

export class PeriodModel extends BaseModel implements IPeriod {
  id!: IPeriod['id'];
  start!: IPeriod['start'];
  end!: IPeriod['end'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.periods}`;
  }

  static get jsonSchema(): JSONSchema {
    return PeriodValidator;
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
      }
    }
  }
}
