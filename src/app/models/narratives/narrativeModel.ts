import { JSONSchema, Modifiers, QueryBuilder } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { INarrative } from './interfaces';
import { NarrativeValidation } from './validation';

export class NarrativeModel extends BaseModel implements INarrative {
  status!: INarrative['status'];
  div!: INarrative['div'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.narratives}`;
  }

  static get jsonSchema(): JSONSchema {
    return NarrativeValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select('status', 'div');
      }
    }
  }
}
