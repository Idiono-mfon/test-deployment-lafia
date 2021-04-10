import {
  JSONSchema,
  Modifiers,
  QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IPractitioner } from './interfaces';
import { PractitionerValidation } from './validation';

export class PractitionerModel extends BaseModel implements IPractitioner {
  text!: IPractitioner['text'];
  name!: IPractitioner['name'];
  photo!: IPractitioner['photo'];
  active!: IPractitioner['active'];
  gender!: IPractitioner['gender'];
  address!: IPractitioner['address'];
  telecom!: IPractitioner['telecom'];
  birthDate!: IPractitioner['birthDate'];
  identifier!: IPractitioner['identifier'];
  narrativeId!: IPractitioner['narrativeId'];
  resourceType!: IPractitioner['resourceType'];
  communication!: IPractitioner['communication'];
  qualifications!: IPractitioner['qualification'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.practitioners}`;
  }

  static get jsonSchema(): JSONSchema {
    return PractitionerValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'narrativeId'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.practitioners}.id`
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
          from: `${Schema.lafiaService}.${Table.practitioners}.narrative_id`,
          to: `${Schema.lafiaService}.${Table.narratives}.id`
        }
      },

      identifier: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../identifiers',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersIdentifiers',
            from: `${Schema.lafiaService}.${Table.practitioners_identifiers}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_identifiers}.identifier_id`
          },
          to: `${Schema.lafiaService}.${Table.identifiers}.id`
        }
      },

      name: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../humanNames',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersHumanNames',
            from: `${Schema.lafiaService}.${Table.practitioners_human_names}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_human_names}.human_name_id`
          },
          to: `${Schema.lafiaService}.${Table.human_names}.id`
        }
      },

      telecom: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../contactPoints',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersContactPoints',
            from: `${Schema.lafiaService}.${Table.practitioners_contact_points}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_contact_points}.contact_point_id`
          },
          to: `${Schema.lafiaService}.${Table.contact_points}.id`
        }
      },

      address: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../address',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersAddress',
            from: `${Schema.lafiaService}.${Table.practitioners_address}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_address}.address_id`
          },
          to: `${Schema.lafiaService}.${Table.address}.id`
        }
      },

      photo: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../attachments',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersAttachments',
            from: `${Schema.lafiaService}.${Table.practitioners_attachments}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_attachments}.attachment_id`
          },
          to: `${Schema.lafiaService}.${Table.attachments}.id`
        }
      },

      communication: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../communications',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersCommunications',
            from: `${Schema.lafiaService}.${Table.practitioners_communications}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_communications}.communication_id`
          },
          to: `${Schema.lafiaService}.${Table.communications}.id`
        }
      },

      qualification: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../qualifications',
        join: {
          from: `${Schema.lafiaService}.${Table.practitioners}.id`,
          through: {
            modelClass: '../practitionersQualifications',
            from: `${Schema.lafiaService}.${Table.practitioners_qualifications}.practitioner_id`,
            to: `${Schema.lafiaService}.${Table.practitioners_qualifications}.qualification_id`
          },
          to: `${Schema.lafiaService}.${Table.qualifications}.id`
        }
      },
    }
  }
}
