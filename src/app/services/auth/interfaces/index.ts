import { Agent } from 'https';
import OAuth2Strategy from 'passport-oauth2';
import { IConnection, IFindConnection, IUser, IUserLoginDto } from '../../../models';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserLoginParams {
  user: IUser;
  token: string;
}

export interface IConnectionCredentials {
  clientSecret: string;
  clientID: string;
  callbackURL: string;
  authorizationURL: string;
  tokenURL: string;
  scope: string;
}

export interface IAuthService {
  login(data: IUserLoginDto, ip?: string): Promise<any>;
  // login(email: string, password: string, ip?: string): Promise<any>;

  getHttpsAgent(): Agent;

  getConnectionCredentials(connectionName: string): IConnectionCredentials;

  getStrategy(connectionName: string): OAuth2Strategy;

  findManyConnection(connectionType: object): Promise<IConnection[]>;

  findOneConnection(fields: IFindConnection): Promise<IConnection>;

  addConnection(data: IConnection): Promise<IConnection>;

  getConnectionByPatientId(patient_id: string): Promise<IConnection[]>;

  updateConnection(id: string, data: IFindConnection): Promise<IConnection>;

  deleteConnection(id: string): Promise<IConnection>;
}
