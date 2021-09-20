import { IBase } from '../../base';

export interface IUser extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  resourceType?: string;
  resourceId?: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  first_name: string;
  last_name: string;
  gender?: string;
  password_reset_token?: string;
  token?: string;
  phone?: string;
  photo?: string;
  hasVerifiedPhone?: boolean;
  hasVerifiedEmail?: boolean;
  has_verified_phone?: boolean;
  has_verified_email?: boolean;
}

export interface IFindUser extends IBase {
  id?: string;
  resource_type?: string;
  resource_id?: string;
  resourceType?: string;
  resourceId?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  password_reset_token?: string;
  token?: string;
  phone?: string;
  photo?: string;
  hasVerifiedPhone?: boolean;
  hasVerifiedEmail?: boolean;
  has_verified_phone?: boolean;
  has_verified_email?: boolean;
}

export interface IUserPhoto extends IBase {
  photo?: string;
}
