import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ILabel } from './interfaces';
import { LabelValidation } from './validation';

export class LabelModel extends BaseModel implements ILabel {
  name: string;

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.labels}`;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get jsonSchema(): JSONSchema {
    return LabelValidation;
  }

  static get relationMappings() {
    return {
      components: {
        relation: BaseModel.HasManyRelation,
        modelClass: '../lang/componentModel',
        join: {
          from: `${Schema.lafiaService}.${Table.labels}.id`,
          to: `${Schema.lafiaService}.${Table.components}.label_id`
        }
      },
      languages: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../lang/languageModel',
        join: {
          from: `${Schema.lafiaService}.${Table.labels}.id`,
          through: {
            from: `${Schema.lafiaService}.${Table.language_label}.label_id`,
            to: `${Schema.lafiaService}.${Table.language_label}.langauge_id`
          },
          to: `${Schema.lafiaService}.${Table.languages}.id`
        }
      }
    };
  }
}
