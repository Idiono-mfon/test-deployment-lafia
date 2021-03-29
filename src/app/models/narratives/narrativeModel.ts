import { JSONSchema } from 'objection';
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
}
