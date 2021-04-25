import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IUser, UserModel } from '../../models';
import { PlatformSdkService } from '../../services/platformSDK';
import { InternalServerError } from '../../utils';

@injectable()
export class UserRepository {
  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  public async createUser(user: IUser): Promise<IUser> {
    try {
      return await UserModel.query()
        .insert(user)
        .returning('*');
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneUser(data: IUser): Promise<IUser> {
    try {
      return await UserModel.query().findOne(data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateUser(id: string, data: IUser): Promise<any> {
    try {
      return await UserModel.query()
        .patchAndFetchById(id, data);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async userLogout(id: string): Promise<IUser> {
    try {
      return await UserModel.query()
        .where({ id })
        .orWhere({ resource_id: id })
        .patchAndFetch({ token: undefined });
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
