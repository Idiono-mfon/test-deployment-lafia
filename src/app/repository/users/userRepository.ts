import { injectable } from 'inversify';
import { IFindUser, IUser, UserModel } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IUserRepository } from './interfaces';

@injectable()
export class UserRepository extends BaseRepository implements IUserRepository {

  constructor() {
    super(UserModel);
  }

  public async getUserByEmailOrPhone(value: string): Promise<IUser> {
    logger.info('Running UserRepository.getUserByEmailOrPhone');
    try {
      return await UserModel.query().where('email', value).orWhere('phone', value).first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async update<T = IFindUser>(id: string, data: T): Promise<IUser> {
    logger.info('Running UserRepository.update');
    try {
      const result = await UserModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const user = result as unknown as IFindUser;

      delete user.password;

      return user as IUser;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async logout(id: string): Promise<IUser> {
    logger.info('Running UserRepository.logout');
    try {
      return await UserModel.query()
        .where({ id })
        .orWhere({ resource_id: id })
        .patchAndFetch({ token: undefined });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
