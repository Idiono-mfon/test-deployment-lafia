import {
  JSONSchema, Modifiers, QueryBuilder,
  RelationMappings
} from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IContactPoint } from './interfaces';
import { ContactPointValidation } from './validation';

export class ContactPointModel extends BaseModel implements IContactPoint {
  system!: IContactPoint['system'];
  value!: IContactPoint['value'];
  use!: IContactPoint['use'];
  rank!: IContactPoint['rank'];
  period!: IContactPoint['period'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.contact_points}`;
  }

  static get jsonSchema(): JSONSchema {
    return ContactPointValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt', 'periodId'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.contact_points}.id`
        );
      },
    };
  }

  static get relationMappings(): RelationMappings {
    return {
      period: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: '../periods',
        join: {
          from: `${Schema.lafiaService}.${Table.contact_points}.period_id`,
          to: `${Schema.lafiaService}.${Table.periods}.id`
        }
      },

      patientContact: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: '../patientContacts',
        join: {
          from: `${Schema.lafiaService}.${Table.contact_points}.id`,
          through: {
            modelClass: '../patientContactsContactPoints',
            from: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.contact_point_id`,
            to: `${Schema.lafiaService}.${Table.patient_contacts_contact_points}.patient_contact_id`
          },
          to: `${Schema.lafiaService}.${Table.patient_contacts}.id`
        }
      },
    }
  }
}
