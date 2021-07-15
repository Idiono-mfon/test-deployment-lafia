import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IUser } from './interfaces';
import { UserValidation } from './validation';

export class UserModel extends BaseModel implements IUser {
  id!: IUser['id'];
  email!: IUser['email'];
  phone!: IUser['phone'];
  resource_type!: IUser['resource_type'];
  resource_id!: IUser['resource_id'];
  first_name!: IUser['first_name'];
  last_name!: IUser['last_name'];
  password!: IUser['password'];
  password_reset_token!: IUser['password_reset_token'];
  gender!: IUser['gender'];
  token!: IUser['token'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.users}`;
  }

  static get jsonSchema(): JSONSchema {
    return UserValidation;
  }
}
