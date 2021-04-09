import {
  JSONSchema, Modifiers, QueryBuilder,
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
  birthDate!: IPatient['birthDate'];
  identifier!: IPatient['identifier'];
  narrativeId!: IPatient['narrativeId'];
  referenceId!: IPatient['referenceId'];
  communication!: IPatient['communication'];
  resourceType!: IPatient['resourceType'];
  maritalStatus!: IPatient['maritalStatus'];
  deceasedBoolean!: IPatient['deceasedBoolean'];
  deceasedDateTime!: IPatient['deceasedDateTime'];
  codeableConceptId!: IPatient['codeableConceptId'];
  generalPractitioner!: IPatient['generalPractitioner'];
  managingOrganization!: IPatient['managingOrganization'];
  multipleBirthBoolean!: IPatient['multipleBirthBoolean'];
  multipleBirthInteger!: IPatient['multipleBirthInteger'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.patients}`;
  }

  static get jsonSchema(): JSONSchema {
    return PatientValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'narrativeId', 'codeableConceptId', 'referenceId', ''];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.patients}.id`
        );
      },
    };
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

      maritalStatus: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../codeableConcepts',
        join: {
          from: `${Schema.lafiaService}.${Table.patients}.codeable_concept_id`,
          to: `${Schema.lafiaService}.${Table.codeable_concepts}.id`
        }
      },

      managingOrganization: {
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

      generalPractitioner: {
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
