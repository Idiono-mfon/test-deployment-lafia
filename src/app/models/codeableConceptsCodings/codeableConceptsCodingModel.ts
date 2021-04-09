import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICodeableConceptsCodings } from './interfaces';
import { CodeableConceptsCodingsValidation } from './validation';

export class CodeableConceptsCodingModel extends BaseModel implements ICodeableConceptsCodings {
  coding_id!: ICodeableConceptsCodings['coding_id'];
  codeable_concept_id!: ICodeableConceptsCodings['codeable_concept_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.codeable_concepts_codings}`;
  }

  static get jsonSchema(): JSONSchema {
    return CodeableConceptsCodingsValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      coding: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codings',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.coding_id`,
          to: `${Schema.lafiaService}.${Table.codings}.id`
        }
      },

      codeableConcept: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.codeable_concepts_codings}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      }
    }
  }
}
