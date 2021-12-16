import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
// import { ComponentModel } from './componentModel';
import { ILangauge } from './interfaces';
// import { LabelModel } from './labelModel';
import { LanguageValidation } from './validation';

export class LanguageModel extends BaseModel implements ILangauge {
  code: string;
  name: string;

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.languages}`;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get jsonSchema(): JSONSchema {
    return LanguageValidation;
  }

  static get relationMappings() {
    return {
      components: {
        relation: BaseModel.HasManyRelation,
        modelClass: './componentModel',
        join: {
          from: `${Schema.lafiaService}.${Table.languages}.id`,
          to: `${Schema.lafiaService}.${Table.components}.language_id`
        }
      },
      labels: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: './labelModel',
        join: {
          from: `${Schema.lafiaService}.${Table.languages}.id`,
          through: {
            from: `${Schema.lafiaService}.${Table.language_label}.language_id`,
            to: `${Schema.lafiaService}.${Table.language_label}.label_id`
          },
          to: `${Schema.lafiaService}.${Table.labels}.id`
        }
      }
    };
  }
}
