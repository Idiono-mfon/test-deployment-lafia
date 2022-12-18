import { IFindUser, IJwtPayload, IUser, ICreateAccount } from '../../../models';

export interface IUserService {
  findOne(query: IFindUser): Promise<IUser>;

  create(data: IUser): Promise<IUser>;

  validate(data: ICreateAccount, ip?: string): Promise<boolean>;

  update(id: string, data: IFindUser): Promise<IFindUser>;

  checkExistingUser(data: IFindUser): Promise<any>;

  login(emailOrPhone: string, password: string): Promise<IUser>;

  logout(id: string): Promise<IUser>;

  generateJwtToken(data: IJwtPayload): string;

  decodeJwtToken(token: string): object | string | IJwtPayload;

  changePassword(id: string, oldPassword: string, newPassword: string): Promise<IUser>;

  resetPassword(email: string): Promise<any>;
}
