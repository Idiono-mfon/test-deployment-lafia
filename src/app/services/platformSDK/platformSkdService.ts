// @ts-ignore
import { PlatformConnection } from 'platform-admin-sdk';
import { injectable } from 'inversify';
import { Env } from '../../config/env';
import {
  error,
  GenericResponseError,
  HttpStatusCode,
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
    } catch(e) {
      console.log('Error:', e.message);
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async userLogin(email: string, password: string): Promise<any> {
    try {
      // Get the platform connection object
      const connection = new PlatformConnection(this.appNamespace, email, this.adminToken);

      // Login to the connection with the user's password
      const loginProfile: any = await connection.login(password);

      if (loginProfile?.code !== HttpStatusCode.OK) {
        throwError(loginProfile?.message, error.badRequest);
      }

      return loginProfile;
    } catch(e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  // Todo: add logout, updatePassword
}
