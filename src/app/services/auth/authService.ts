import * as https from 'https';
import { inject, injectable } from 'inversify';
import * as _ from 'lodash';
import OAuth2Strategy from 'passport-oauth2';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IConnection, IFindConnection, IUser } from '../../models';
import { ConnectionRepository } from '../../repository';
import { error, forWho, GenericResponseError, getE164Format, logger, throwError } from '../../utils';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { UserService } from '../users';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

@injectable()
export class AuthService {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.UserService)
  private userService: UserService;
  @inject(TYPES.ConnectionRepository)
  private connectionRepository: ConnectionRepository;

  public async login(email: string, password: string, ip?: string): Promise<any> {
    logger.info('Running AuthService.login');
    try {

      if (_.isNumber(email)) {
        email = getE164Format(email, ip);
      }

      const loggedInUser: IUser = await this.userService.userLogin(email, password);

      const token = this.userService.generateJwtToken({ email, id: loggedInUser.resourceId });
      let loggedInUserData: any;

      if (loggedInUser.photo === null) {
        delete loggedInUser.photo;
      }

      if (loggedInUser.provider === null) {
        delete loggedInUser.provider;
      }

      if (loggedInUser.resourceType === forWho.patient) {
        loggedInUserData = await this.patientService.patientLogin({ user: loggedInUser, token });
      }

      if (loggedInUser.resourceType === forWho.practitioner) {
        loggedInUserData = await this.practitionerService.practitionerLogin({ user: loggedInUser, token });
      }

      return {
        user: loggedInUserData,
        auth_token: token
      }
    } catch (e: any) {
      throw new GenericResponseError(e.toString(), e.code);
    }
  }

  public getHttpsAgent() {
    logger.info('Running AuthService.getHttpsAgent');
    return new https.Agent({
      rejectUnauthorized: false,
    });
  }

  public getConnectionCredentials(connectionName: string) {
    logger.info('Running AuthService.getConnectionCredentials');

    if (!connectionName) {
      logger.error('connection name is required - AuthService.getConnectionCredentials');
      throwError('connection name is required', error.badRequest);
    }

    const env = Env.all();
    connectionName = connectionName.toLowerCase();

    return {
      clientSecret: env[`${connectionName}_client_secret`],
      clientID: env[`${connectionName}_client_id`],
      callbackURL: env[`${connectionName}_callback_url`],
      authorizationURL: env[`${connectionName}_authorization_url`],
      tokenURL: env[`${connectionName}_token_url`],
      scope: env[`${connectionName}_scope`]
    }
  }

  public getStrategy(connectionName: string) {
    logger.info('Running AuthService.getStrategy');
    const credentials = this.getConnectionCredentials(connectionName);
    const strategy = new OAuth2Strategy(credentials,
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
    strategy._oauth2.setAgent(httpsAgent);

    return strategy;
  }

  public async getConnectionByType(connectionType: object): Promise<IConnection[]> {
    logger.info('Running AuthService.getConnectionByType');
    return this.connectionRepository.getConnectionByType(connectionType);
  }

  public async getConnectionByFields(fields: IFindConnection): Promise<IConnection> {
    logger.info('Running AuthService.getConnectionByFields');
    return this.connectionRepository.getConnectionByFields(fields);
  }

  public async addConnection(data: IConnection): Promise<IConnection> {
    logger.info('Running AuthService.addConnection');
    return this.connectionRepository.addConnection(data);
  }

  public async getConnectionByPatientId(patient_id: string): Promise<IConnection[]> {
    logger.info('Running AuthService.getConnectionByPatientId');
    return this.connectionRepository.getConnectionByPatientId(patient_id);
  }

  public async updateConnection(data: IFindConnection): Promise<IConnection> {
    logger.info('Running AuthService.updateConnection');
    return this.connectionRepository.updateConnection(data);
  }

  public async deleteConnection(id: string) {
    logger.info('Running AuthService.deleteConnection');
    return this.connectionRepository.deleteConnection(id);
  }
}
