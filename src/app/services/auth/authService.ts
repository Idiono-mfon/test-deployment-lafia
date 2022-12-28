import { Agent } from 'https';
import * as https from 'https';
import * as _ from 'lodash';
import OAuth2Strategy from 'passport-oauth2';
import { inject, injectable } from 'inversify';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IUserService } from '../users';
import { DbAccess } from '../../repository';
import { IPatientService } from '../patients';
import { IPractitionerService } from '../practitioners';
import { IConnection, IFindConnection, IUser, IUserLoginDto } from '../../models';
import { IAuthService, IConnectionCredentials } from './interfaces';
import {
  error,
  forWho,
  GenericResponseError,
  getE164Format,
  logger,
  throwError,
} from '../../utils';

@injectable()
export class AuthService implements IAuthService {
  @inject(TYPES.PatientService)
  private readonly patientService: IPatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: IPractitionerService;
  @inject(TYPES.UserService)
  private userService: IUserService;
  @inject(TYPES.ConnectionRepository)
  private connectionRepository: DbAccess;

  public async login(data: IUserLoginDto, ip?: string): Promise<any> {
    logger.info('Running AuthService.login');
    try {
      let loggedInUser: IUser;

      const { email, isEmail, password } = data;

      let { phone } = data;

      // if (_.isNumber(email)) {
      //   isPhone = true;
      //   email = getE164Format(email, ip);
      // }

      if (!isEmail) {
        phone = getE164Format(phone, ip);
        loggedInUser = await this.userService.login(phone, password);
      } else {
        loggedInUser = await this.userService.login(email, password);
      }

      // const loggedInUser: IUser = await this.userService.login(email, password);

      const tokenPayload = isEmail
        ? { email, id: loggedInUser.resourceId }
        : { phone, id: loggedInUser.resourceId };

      const token = this.userService.generateJwtToken(tokenPayload);
      // const token = this.userService.generateJwtToken({ email, id: loggedInUser.resourceId });

      let loggedInUserData: any;

      if (loggedInUser.photo === null) {
        delete loggedInUser.photo;
      }

      if (loggedInUser.provider === null) {
        delete loggedInUser.provider;
      }

      if (loggedInUser.resourceType === forWho.patient) {
        loggedInUserData = await this.patientService.login({ user: loggedInUser, token });
      }

      if (loggedInUser.resourceType === forWho.practitioner) {
        loggedInUserData = await this.practitionerService.login({ user: loggedInUser, token });
      }

      return {
        user: loggedInUserData,
        auth_token: token,
      };
    } catch (e: any) {
      throw new GenericResponseError(e.toString(), e.code);
    }
  }

  public getHttpsAgent(): Agent {
    logger.info('Running AuthService.getHttpsAgent');
    return new https.Agent({
      rejectUnauthorized: false,
    });
  }

  public getConnectionCredentials(connectionName: string): IConnectionCredentials {
    logger.info('Running AuthService.getConnectionCredentials');

    if (!connectionName) {
      logger.error('connection name is required - AuthService.getConnectionCredentials');
      throwError('connection name is required', error.badRequest);
    }

    const env: any = Env.all();
    connectionName = connectionName.toLowerCase();

    return {
      clientSecret: env[`${connectionName}_client_secret`],
      clientID: env[`${connectionName}_client_id`],
      callbackURL: env[`${connectionName}_callback_url`],
      authorizationURL: env[`${connectionName}_authorization_url`],
      tokenURL: env[`${connectionName}_token_url`],
      scope: env[`${connectionName}_scope`],
    };
  }

  public getStrategy(connectionName: string): OAuth2Strategy {
    logger.info('Running AuthService.getStrategy');
    const credentials = this.getConnectionCredentials(connectionName);
    const strategy = new OAuth2Strategy(
      credentials,
      (accessToken: string, refreshToken: string, profile: any, cb: any) => {
        // @ts-ignore
        global.accessToken = accessToken;
        // @ts-ignore
        global.refreshToken = refreshToken;

        return cb(null, {
          accessToken,
          refreshToken,
        });
      }
    );

    // @ts-ignore
    strategy._oauth2.setAgent(this.getHttpsAgent());

    return strategy;
  }

  public async findManyConnection(connectionType: object): Promise<IConnection[]> {
    logger.info('Running AuthService.findManyConnection');
    return this.connectionRepository.findMany(connectionType);
  }

  public async findOneConnection(fields: IFindConnection): Promise<IConnection> {
    logger.info('Running AuthService.findOneConnection');
    return this.connectionRepository.findOne(fields);
  }

  public async addConnection(data: IConnection): Promise<IConnection> {
    logger.info('Running AuthService.addConnection');
    return this.connectionRepository.create(data);
  }

  public async getConnectionByPatientId(patient_id: string): Promise<IConnection[]> {
    logger.info('Running AuthService.getConnectionByPatientId');
    return this.connectionRepository.findMany({ patient_id });
  }

  public async updateConnection(id: string, data: IFindConnection): Promise<IConnection> {
    logger.info('Running AuthService.updateConnection');
    return this.connectionRepository.update(id, data);
  }

  public async deleteConnection(id: string): Promise<IConnection> {
    logger.info('Running AuthService.deleteConnection');
    return this.connectionRepository.delete(id);
  }
}
