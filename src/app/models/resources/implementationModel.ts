import {
  JSONSchema,
  RelationMappings
} from 'objection';
import { FhirResourceModel } from '.';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IImplementationGuide } from './interfaces';
import { ImplementationGuideValidation } from './validation';

export class ImplementationGuideModel extends BaseModel implements IImplementationGuide {
  name!: IImplementationGuide['name'];
  slug!: IImplementationGuide['slug'];
  photo!: IImplementationGuide['photo'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.implementation_guides}`;
  }

  static get jsonSchema(): JSONSchema {
    return ImplementationGuideValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      fhirResources: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: FhirResourceModel,
        join: {
          from: `${Schema.lafiaService}.${Table.fhir_resources}.id`,
          through: {
            from: `${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}.ig_id`,
            to: `${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}.fr_id`
          },
          to: `${Schema.lafiaService}.${Table.implementation_guides}.id`
        }
      }
    }
  }
}
