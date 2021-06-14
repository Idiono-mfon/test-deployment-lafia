import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IFindUser, IUser } from '../../models';
import { UserRepository } from '../../repository';
import {
  error,
  GenericResponseError,
  HttpStatusCode,
  throwError
} from '../../utils';
import { Password } from '../../utils/password';
import { PlatformSdkService } from '../platformSDK';
import { IJwtPayload } from '../platformSDK/interfaces';

const env = Env.all();

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepository: UserRepository;

  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  public async createUser(user: IUser): Promise<IUser> {
    try {
      // Validate password
      const isValidPassword = Password.validatePassword(user.password);
      console.log('isValidPassword:', isValidPassword);

      if (!isValidPassword) {
        const ERROR_MESSAGE = 'Hint: password must be minimum ' +
          'of 6 characters and must have a ' +
          'combination of at least one Upper case, one Lower case, ' +
          'one digit and one or more of ' +
          'these special characters - !@#$%^&-.+=()';

        throwError(ERROR_MESSAGE, error.badRequest);
      }

      // Hash user password
      user.password = await Password.hash(user.password);

      const data = {
        id: uuid(),
        ...user,
      };
      return await this.userRepository.createUser(data);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getOneUser(data: IFindUser): Promise<IUser> {
    return await this.userRepository.getOneUser(data);
  }

  public async updateUser(id: string, data: IFindUser): Promise<IFindUser> {
    return await this.userRepository.updateUser(id, data);
  }

  public async userLogin(email: string, password: string): Promise<IUser> {
    try {
      // Login with email?
      let user = await this.userRepository.getOneUser({ email });

      if (!user) {
        throwError('Invalid username or password', error.unauthorized);
      }

      const isValidPassword = await Password.compare(password, user.password);

      if (!isValidPassword) {
        throwError('Invalid username or password', error.unauthorized);
      }

      return user;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async userLogout(id: string): Promise<IUser> {
    return await this.userRepository.userLogout(id);
  }

  public generateJwtToken(data: IJwtPayload): string {
    try {
      const { id } = data;
      delete data.id;
      return jwt.sign(data, env.jwt_secrete_key, {
        audience: id,
      });
    } catch (e) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
