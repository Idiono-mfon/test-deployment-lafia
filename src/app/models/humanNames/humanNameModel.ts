import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IHumanName } from './interfaces';
import { HumanNameValidation } from './validation';

export class HumanNameModel extends BaseModel implements IHumanName {
  use!: IHumanName['use'];
  text!: IHumanName['text'];
  given!: IHumanName['given'];
  family!: IHumanName['family'];
  prefix!: IHumanName['prefix'];
  suffix!: IHumanName['suffix'];
  period!: IHumanName['period'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.human_names}`;
  }

  static get jsonSchema(): JSONSchema {
    return HumanNameValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'periodId'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.human_names}.id`
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
          from: `${Schema.lafiaService}.${Table.human_names}.period_id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      patientContact: {
        relation: BaseModel.HasOneRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.human_names}.id`,
          to: `${Schema.lafiaService}.${Table.patient_contacts}.human_name_id`
        }
      },
    }
  }
}
