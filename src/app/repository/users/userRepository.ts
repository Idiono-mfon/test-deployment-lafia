import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IFindUser, IUser, UserModel } from '../../models';
import { PlatformSdkService } from '../../services';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class UserRepository {
  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  public async createUser(user: IUser): Promise<IUser> {
    logger.info('Running UserRepository::createUser');
    try {
      return await UserModel.query()
        .insert(user)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneUser(data: IFindUser | any): Promise<IUser> {
    logger.info('Running UserRepository::getOneUser');
    try {
      return await UserModel.query().findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneBy(field: string, value:string): Promise<IUser> {
    logger.info('Running UserRepository::getOneBy');
    try {
      return await UserModel.query().where(field, value).first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getUserByEmailOrPhone(value:string): Promise<IUser> {
    logger.info('Running UserRepository::getUserByEmailOrPhone');
    try {
      return await UserModel.query().where("email", value).orWhere("phone", value).first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateUser(id: string, data: IFindUser): Promise<any> {
    logger.info('Running UserRepository::updateUser');
    try {
      return await UserModel.query()
        .patch(data)
        // .where({ id })
        .where({ resource_id: id })
        .returning("*")
        .first()
        ;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async userLogout(id: string): Promise<IUser> {
    logger.info('Running UserRepository::userLogout');
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
