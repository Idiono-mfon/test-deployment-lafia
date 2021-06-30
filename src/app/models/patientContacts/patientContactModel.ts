import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatientContact } from './interfaces';
import { PatientContactValidation } from './validation';

export class PatientContactModel extends BaseModel implements IPatientContact {
  name!: IPatientContact['name'];
  period!: IPatientContact['period'];
  gender!: IPatientContact['gender'];
  address!: IPatientContact['address'];
  telecom!: IPatientContact['telecom'];
  created_at!: IPatientContact['created_at'];
  updated_at!: IPatientContact['updated_at'];
  organization!: IPatientContact['organization'];
  relationship!: IPatientContact['relationship'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patient_contacts}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientContactValidation;
  }

  static get hidden(): string[] {
    return [
      'updatedAt',
      'createdAt',
      'periodId',
      'humanNameId',
      'addressId',
      'referenceId'
    ];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.patient_contacts}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      name: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.human_name_id`,
          to: `${Schema.lafiaService}.${Table.human_names}.id`
        }
      },

      address: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.address_id`,
          to: `${Schema.lafiaService}.${Table.address}.id`
        }
      },

      organization: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.reference_id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },

      period: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../periods',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.period_id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      relationship: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.id`,
          through: {
            modelClass: '../patientContactsCodeableConcepts',
            from: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.patient_contact_id`,
            to: `${Schema.lafiaService}.${Table.patient_contacts_codeable_concepts}.codeable_concept_id`
          },
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      },

      telecom: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.patient_contacts}.id`,
          through: {
            modelClass: '../patientContactsContactPoints',
            from: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.patient_contact_id`,
            to: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.contact_point_id`
          },
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      },
    }
  }
}