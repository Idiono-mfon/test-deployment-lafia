import { JSONSchema, Modifiers, QueryBuilder, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IValueSet } from './interfaces';
import { ValueSetValidation } from './validation';

export class ValueSetModel extends BaseModel implements IValueSet {
  id!: IValueSet['id'];
  resource_id!: IValueSet['resource_id'];
  resource_type!: IValueSet['resource_type'];
  status!: IValueSet['status'];
  name!: IValueSet['name'];
  title!: IValueSet['title'];
  experimental!: IValueSet['experimental'];
  publisher!: IValueSet['publisher'];
  last_changed!: IValueSet['last_changed'];
  description!: IValueSet['description'];
  copyright!: IValueSet['description'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.value_sets}`;
  }

  static get jsonSchema(): JSONSchema {
    return ValueSetValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(`${Schema.lafiaService}.${Table.value_sets}.id`);
      },
    };
  }
}
