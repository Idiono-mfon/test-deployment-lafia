import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { CreateUser } from './interfaces';

export class UserModel extends BaseModel implements CreateUser {
  id!: CreateUser['id'];
  first_name!: CreateUser['first_name'];
  last_name!: CreateUser['last_name'];
  email!: CreateUser['email'];
  password!: CreateUser['password'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.users}`;
  }
}
