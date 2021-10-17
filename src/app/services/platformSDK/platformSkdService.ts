// @ts-ignore
import { PlatformConnection } from 'platform-admin-sdk';
import { injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { Env } from '../../config/env';
import {
  error,
  GenericResponseError,
  HttpStatusCode, logger,
  throwError
} from '../../utils';

const env = Env.all();

@injectable()
export class PlatformSdkService {
  private readonly appNamespace: string;
  private readonly adminToken: number;

  constructor() {
    this.appNamespace = env.platform_app_namespace;
    this.adminToken = env.platform_admin_key;
  }

  public async userSignup(data: any): Promise<any> {
    logger.info('Running PlatformSdkService.userSignup');
    try {
      const { email, first_name, last_name, password } = data;

      // Get the platform connection object
      const connection = new PlatformConnection(this.appNamespace, email, this.adminToken);

      // Signup by passing firstName, lastName and Password
      const signupResponse: any = await connection.signup(first_name, last_name, password);

      if (signupResponse?.code >= HttpStatusCode.BAD_REQUEST) {
        throwError(signupResponse?.message, error.badRequest);
      }

      return signupResponse;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async userLogin(email: string, password: string): Promise<any> {
    logger.info('Running PlatformSdkService.userLogin');
    try {
      // Get the platform connection object
      const connection = new PlatformConnection(this.appNamespace, email, this.adminToken);

      // Login to the connection with the user's password
      const loginProfile: any = await connection.login(password);

      if (loginProfile?.code !== HttpStatusCode.OK) {
        throwError(loginProfile?.message, error.badRequest);
      }

      return loginProfile;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public verifyJwtToken(token: string): any {
    logger.info('Running PlatformSdkService.verifyJwtToken');
    try {
      return jwt.verify(token, env.jwt_secrete_key, {
        maxAge: '1hr'
      });
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
