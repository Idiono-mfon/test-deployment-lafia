import {
  JSONSchema,
  RelationMappings
} from 'objection';
import { ImplementationGuideModel } from '.';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IFhirResource } from './interfaces';
import { FHirResourceValidation } from './validation';

export class FhirResourceModel extends BaseModel implements IFhirResource {
  name!: IFhirResource['name'];
  slug!: IFhirResource['slug'];
  examples!: IFhirResource['examples'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.fhir_resources}`;
  }

  static get jsonSchema(): JSONSchema {
    return FHirResourceValidation;
  }

  static get relationMappings(): RelationMappings {
    return {
      implementationGuides: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: ImplementationGuideModel,
        join: {
          from: `${Schema.lafiaService}.${Table.fhir_resources}.id`,
          through: {
            from: `${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}.fr_id`,
            to: `${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}.ig_id`
          },
          to: `${Schema.lafiaService}.${Table.implementation_guides}.id`
        }
      }
    }
  }
}
