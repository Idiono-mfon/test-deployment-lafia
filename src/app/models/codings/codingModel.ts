import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICoding } from './interfaces';
import { CodingValidation } from './validation';

export class CodingModel extends BaseModel implements ICoding {
  system!: ICoding['system'];
  version!: ICoding['version'];
  code!: ICoding['code'];
  display!: ICoding['display'];
  user_selected!: ICoding['user_selected'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.codings}`;
  }

  static get jsonSchema(): JSONSchema {
    return CodingValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      codeable_concept: {
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
