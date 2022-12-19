import {
  IFindUser,
  IJwtPayload,
  IUser,
  ICreateAccount,
  IVerifyOTP,
  IValidateUser,
} from '../../../models';
import { TwilioOTP } from '../../twilio';

export interface IUserService {
  findOne(query: IFindUser): Promise<IUser>;

  create(data: IUser): Promise<IUser>;

  validate(data: ICreateAccount, ip?: string): Promise<IValidateUser>;

  verifyOTP(data: IVerifyOTP): Promise<TwilioOTP>;

  update(id: string, data: IFindUser): Promise<IFindUser>;

  checkExistingUser(data: IFindUser): Promise<any>;

  login(emailOrPhone: string, password: string): Promise<IUser>;

  logout(id: string): Promise<IUser>;

  generateJwtToken(data: IJwtPayload): string;

  decodeJwtToken(token: string): object | string | IJwtPayload;

  changePassword(id: string, oldPassword: string, newPassword: string): Promise<IUser>;

  resetPassword(email: string): Promise<any>;
}
