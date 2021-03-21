import { Schema, Table } from '../../../database';
// noinspection ES6PreferShortImport
import { Model } from '../../config/db';

export class UserModel extends Model {
  id!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  created_at!: string;
  updated_at!: string;

  static get tableName() {
    return `${Schema.lafiaService}.${Table.users}`;
  }
}
