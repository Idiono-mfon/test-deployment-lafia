import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IOrganization } from './interfaces';
import { OrganizationValidation } from './validation';

export class OrganizationModel extends BaseModel implements IOrganization {
  id!: IOrganization['id'];
  resource_type!: IOrganization['resource_type'];
  resource_id!: IOrganization['resource_id'];
  name!: IOrganization['name'];
  active!: IOrganization['active'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.organizations}`;
  }

  static get jsonSchema(): JSONSchema {
    return OrganizationValidation;
  }
}
