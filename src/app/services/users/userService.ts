import { inject, injectable } from 'inversify';
import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { CreateUser } from '../../models';
import { UserRepository } from '../../repository';
import { Password } from '../../utils/password';

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;

  public async createUser(user: CreateUser): Promise<any> {
    const password = await Password.hash(user.password as string);
    delete user.password;
    const data = {
      id: uuid(),
      ...user,
      password,
    };
    return this.userRepository.createUser(data);
  }
}
