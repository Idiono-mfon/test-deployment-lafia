import { inject, injectable } from 'inversify';
import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { IUser } from '../../models';
import { UserRepository } from '../../repository';
import { PlatformSdkService } from '../platformSDK';

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;

  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  public async createUser(user: IUser): Promise<IUser> {
    const data = {
      id: uuid(),
      ...user,
    };
    return await this.userRepository.createUser(data);
  }

  public async UserLogin(email: string, password: string): Promise<any> {
    return await this.userRepository.userLogin(email, password);
  }

  public async getOneUser(data: IUser): Promise<IUser> {
    return await this.userRepository.getOneUser(data);
  }

  public async updateUser(id: string, data: IUser): Promise<IUser> {
    return await this.userRepository.updateUser(id, data);
  }

  public async userLogout(id: string): Promise<IUser> {
    return await this.userRepository.userLogout(id);
  }
}
