import { JSONSchema, Modifiers, QueryBuilder } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IAgreement } from './interfaces';
import { AgreementValidation } from './validation';

export class AgreementModel extends BaseModel implements IAgreement {
  id!: IAgreement['id'];

  name!: IAgreement['name'];
  title!: IAgreement['title'];
  contents!: IAgreement['contents'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.agreements}`;
  }

  static get jsonSchema(): JSONSchema {
    return AgreementValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(`${Schema.lafiaService}.${Table.agreements}.id`);
      },
    };
  }
}
