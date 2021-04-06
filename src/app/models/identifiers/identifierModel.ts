import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IIdentifier } from './interfaces';
import { IdentifierValidation } from './validation';

export class IdentifierModel extends BaseModel implements IIdentifier {
  use!: IIdentifier['use'];
  type!: IIdentifier['type'];
  value!: IIdentifier['value'];
  system: IIdentifier['system'];
  period!: IIdentifier['period'];
  assigner!: IIdentifier['assigner'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.identifiers}`;
  }

  static get jsonSchema(): JSONSchema {
    return IdentifierValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select('use', 'value', 'system');
      }
    }
  }

  static get relationMappings(): RelationMappings {
    return {
      type: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.identifiers}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      },

      period: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../periods',
        join: {
          from: `${Schema.lafiaService}.${Table.identifiers}.period_id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      assigner: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.identifiers}.id`,
          through: {
            modelClass: '../referencesIdentifiers',
            from: `${Schema.lafiaService}.${Table.identifiers_references}.reference_id`,
            to: `${Schema.lafiaService}.${Table.identifiers_references}.identifier_id`
          },
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      }
    }
  }
}
