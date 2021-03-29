import { IBase } from '../../base';

export interface CreateUser extends IBase {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
}
