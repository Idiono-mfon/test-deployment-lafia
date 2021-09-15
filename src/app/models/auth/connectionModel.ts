import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IConnection } from './interfaces';
import { ConnectionValidation } from './validation';

export class ConnectionModel extends BaseModel implements IConnection {
  patient_id!: IConnection['patient_id'];
  access_token!: IConnection['access_token'];
  refresh_token!: IConnection['refresh_token'];
  connection_name!: IConnection['connection_name'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.connections}`;
  }

  static get jsonSchema(): JSONSchema {
    return ConnectionValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.connections}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
    }
  }
}
