import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICodeSystem } from './interfaces';
import { CodeSystemValidation } from './validation';

export class CodeSystemModel extends BaseModel implements ICodeSystem {
  code!: ICodeSystem['code'];
  display!: ICodeSystem['display'];
  type!: ICodeSystem['type'];
  system!: ICodeSystem['system'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.code_systems}`;
  }

  static get jsonSchema(): JSONSchema {
    return CodeSystemValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'type'];
  }
}
