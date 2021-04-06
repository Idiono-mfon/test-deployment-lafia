import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPatient } from './interfaces';
import { PatientValidation } from './validation';

export class PatientModel extends BaseModel implements IPatient {
  text!: IPatient['text'];
  link!: IPatient['link'];
  name!: IPatient['name'];
  photo!: IPatient['photo'];
  active!: IPatient['active'];
  gender!: IPatient['gender'];
  address!: IPatient['address'];
  contact!: IPatient['contact'];
  telecom!: IPatient['telecom'];
  birth_date!: IPatient['birth_date'];
  identifier!: IPatient['identifier'];
  narrative_id!: IPatient['narrative_id'];
  reference_id!: IPatient['reference_id'];
  communication!: IPatient['communication'];
  resource_type!: IPatient['resource_type'];
  marital_status!: IPatient['marital_status'];
  deceased_boolean!: IPatient['deceased_boolean'];
  deceased_date_time!: IPatient['deceased_date_time'];
  codeable_concept_id!: IPatient['codeable_concept_id'];
  general_practitioner!: IPatient['general_practitioner'];
  managing_organization!: IPatient['managing_organization'];
  multiple_birth_boolean!: IPatient['multiple_birth_boolean'];
  multiple_birth_integer!: IPatient['multiple_birth_integer'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientValidation;
  }

  static get modifiers(): Modifiers {
    return {
      defaultSelects(builder: QueryBuilder<any, any[]>) {
        builder.select(
          'resource_type',
          'active',
          'gender',
          'birth_date',
          'deceased_boolean',
          'deceased_date_time',
          'multiple_birth_boolean',
          'multiple_birth_integer'
        );
      }
    }
  }

  static get relationMappings(): RelationMappings {
    return {
      text: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../narratives',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.narrative_id`,
          to: `${Schema.lafiaService}.${Table.narratives}.id`
        }
      },

      marital_status: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      },

      managing_organization: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.reference_id`,
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },

      identifier: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsIdentifiers',
            from: `${Schema.lafiaService}.${Table.patients_identifiers}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_identifiers}.identifier_id`
          },
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },

      name: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsHumanNames',
            from: `${Schema.lafiaService}.${Table.patients_human_names}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_human_names}.human_name_id`
          },
          to: `${Schema.lafiaService}.${Table.human_names}.id`
        }
      },

      telecom: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsContactPoints',
            from: `${Schema.lafiaService}.${Table.patients_contact_points}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_contact_points}.contact_point_id`
          },
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      },

      address: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsAddress',
            from: `${Schema.lafiaService}.${Table.patients_address}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_address}.address_id`
          },
          to: `${Schema.lafiaService}.${Table.address}.id`
        }
      },

      photo: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../attachments',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsAttachments',
            from: `${Schema.lafiaService}.${Table.patients_attachments}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_attachments}.attachment_id`
          },
          to: `${Schema.lafiaService}.${Table.attachments}.id`
        }
      },

      contact: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsPatientContacts',
            from: `${Schema.lafiaService}.${Table.patients_patient_contacts}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_patient_contacts}.patient_contact_id`
          },
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },

      communication: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../communications',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsCommunications',
            from: `${Schema.lafiaService}.${Table.patients_communications}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_communications}.communication_id`
          },
          to: `${Schema.lafiaService}.${Table.communications}.id`
        }
      },

      general_practitioner: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../references',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsReferences',
            from: `${Schema.lafiaService}.${Table.patients_references}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_references}.reference_id`
          },
          to: `${Schema.lafiaService}.${Table.references}.id`
        }
      },

      link: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../patientLinks',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.id`,
          through: {
            modelClass: '../patientsPatientLinks',
            from: `${Schema.lafiaService}.${Table.patients_patient_links}.patient_id`,
            to: `${Schema.lafiaService}.${Table.patients_patient_links}.patient_link_id`
          },
          to: `${Schema.lafiaService}.${Table.patient_links}.id`
        }
      },
    }
  }
}
