import { IBase } from '../../base';

export interface IConnection extends IBase {
  patient_id: string;
  access_token: string;
  refresh_token?: string;
  connection_name?: string;
  accessToken?: string;
  refreshToken?: string;
  connectionName?: string;
}

export interface IFindConnection extends IBase {
  patient_id?: string;
  access_token?: string;
  refresh_token?: string;
  connection_name?: string;
  accessToken?: string;
  refreshToken?: string;
  connectionName?: string;
}

export interface ICreateAccount {
  isEmail: boolean;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface ICreateAccountDto {
  isEmail: boolean;
  password: string;
  confirmPassword: string;
  emailOrPhone: string;
}

export interface IVerifyOTP {
  from_email: boolean;
  code: string;
  email: string;
  phone: string;
}

export interface IVerifyOTPDto {
  from_email: boolean;
  code: string;
  emailOrPhone: string;
}
