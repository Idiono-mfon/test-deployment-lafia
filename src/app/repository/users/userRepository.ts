import { injectable } from 'inversify';
import { CreateUser, UserModel } from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class UserRepository {
  public async createUser(user: CreateUser): Promise<CreateUser> {
    try {
      return await UserModel.query()
        .insert(user)
        .returning('*');
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
