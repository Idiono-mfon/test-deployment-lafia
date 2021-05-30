import { JSONSchema, RelationMappings } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitionersQualification } from './interfaces';
import { PractitionersQualificationValidation } from './validation';

export class PractitionersQualificationModel extends BaseModel implements IPractitionersQualification {
  practitioner_id!: IPractitionersQualification['practitioner_id'];
  qualification_id!: IPractitionersQualification['qualification_id'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners_qualifications}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionersQualificationValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      practitioner: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../practitioners',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_qualifications}.practitioner_id`,
          to: `${Schema.lafiaService}.${Table.practitioners}.id`
        }
      },

      qualification: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../qualifications',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners_qualifications}.qualification_id`,
          to: `${Schema.lafiaService}.${Table.qualifications}.id`
        }
      },
    }
  }
}
