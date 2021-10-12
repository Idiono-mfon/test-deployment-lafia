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
