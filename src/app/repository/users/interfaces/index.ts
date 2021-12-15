import { IUser } from '../../../models';
import { DbAccess } from '../../base';

export interface IUserRepository extends DbAccess {
  getUserByEmailOrPhone(emailOrPhone: string): Promise<IUser>;

  logout(id: string): Promise<IUser>;
}
