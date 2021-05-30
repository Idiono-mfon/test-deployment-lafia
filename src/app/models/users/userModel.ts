import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IUser } from './interfaces';
import { UserValidation } from './validation';

export class UserModel extends BaseModel implements IUser {
  id!: IUser['id'];
  email!: IUser['email'];
  resource_type!: IUser['resource_type'];
  resource_id!: IUser['resource_id'];
  token!: IUser['token'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.users}`;
  }

  static get jsonSchema(): JSONSchema {
    return UserValidation;
  }
}
