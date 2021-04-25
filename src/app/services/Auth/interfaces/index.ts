import { IUser } from '../../../models';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserLoginParams {
  user: IUser;
  token: string
}
