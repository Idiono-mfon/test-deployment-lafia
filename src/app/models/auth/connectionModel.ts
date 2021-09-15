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
    return `${Schema.lafiaService}.${Table.codings}`;
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
          `${Schema.lafiaService}.${Table.codings}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      codeableConcept: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.codings}.id`,
          through: {
            from: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.codeable_concept_id`,
            to: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.coding_id`
          },
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      }
    }
  }
}
