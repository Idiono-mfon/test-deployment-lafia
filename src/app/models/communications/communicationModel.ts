import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICommunication } from './interfaces';
import { CommunicationValidation } from './validation';

export class CommunicationModel extends BaseModel implements ICommunication {
  language!: ICommunication['language'];
  preferred!: ICommunication['preferred'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.communications}`;
  }

  static get jsonSchema(): JSONSchema {
    return CommunicationValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select('preferred');
      }
    }
  }

  static get relationMappings(): RelationMappings {
    return {
      language: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.communications}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      }
    }
  }
}
