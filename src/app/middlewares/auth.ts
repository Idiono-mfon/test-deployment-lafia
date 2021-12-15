import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';
import jwt from 'jsonwebtoken';
import { Env } from '../config/env';
import TYPES from '../config/types';
import { IPatient, IPractitioner, IUser } from '../models';
import { IUserService, PatientService, PractitionerService } from '../services';
import { forWho, logger } from '../utils';

interface CastJWTDecodedType {
  email: string;
  iat?: number;
  aud: string
}

const env = Env.all();

@injectable()
export class AuthMiddleware extends BaseMiddleware {

  @inject(TYPES.UserService)
  private readonly userService: IUserService;
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;

  public async handler(req: Request, res: Response, next: NextFunction) {
    logger.info('Running AuthMiddleware.handler');
    try {

      const jwtPayload: CastJWTDecodedType = AuthMiddleware.decodeJwtToken(req);
      const user = await this.getUserPayload(jwtPayload);

      // res.locals.token = jwtPayload.token as string;
      res.locals.user = user;
      req.body.user = user;

      next();
    } catch (e: any) {
      logger.error(`Authentication failed`, e);
      res.status(401).send({
        status: 'error',
        code: 401,
        message: 'Unable to authenticate'
      });
    }
  }

  public authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    logger.info('Running AuthMiddleware.authenticate');
    try {
      const jwtPayload: CastJWTDecodedType = AuthMiddleware.decodeJwtToken(req);

      res.locals.user = await this.getUserPayload(jwtPayload);

      next();
    } catch (e: any) {
      logger.error(`Authentication failed`, e);
      res.status(401).send({
        status: 'error',
        code: 401,
        message: 'Unable to authenticate'
      });
    }
  }

  private static decodeJwtToken(req: Request): CastJWTDecodedType {
    logger.info('Running AuthMiddleware.decodeJwtToken');
    const requestHeaderAuthorization: string = req.headers.authorization as string;

    if (!requestHeaderAuthorization) {
      throw new Error('Unable to authenticate.');
    }

    const [authBearer, token] = requestHeaderAuthorization.split(' ');

    if (authBearer !== 'Bearer') {
      throw new Error('Unable to authenticate.');
    }

    const decoded = jwt.verify(token, env.jwt_secrete_key);

    return decoded as CastJWTDecodedType;
  }

  public parseThirdPartyConnection = (req: Request, res: Response, next: NextFunction): void => {
    logger.info('Running AuthMiddleware.parseThirdPartyConnection');
    const oauth: string = req.headers['x-oauth'] as string;
    const connectionName: string = req.headers['x-connection-name'] as string;
    const ig: string = req.headers['x-ig'] as string;
    const textResource: string = req.headers['x-test-resource'] as string;

    res.locals.connection = {
      'x-oauth': oauth,
      'x-connection-name': connectionName,
      'x-ig': ig,
      'x-test-resource': textResource
    }

    next()
  }

  private async getUserPayload(payload: CastJWTDecodedType): Promise<IUser | IPatient | IPractitioner> {
    logger.info('Running AuthMiddleware.getUserPayload');
    let user: IUser | IPatient | IPractitioner = await this.userService.findOne({ resource_id: payload.aud });

    if (!user) {
      throw new Error('User not found');
    }

    if (user?.resourceType?.toLowerCase() === forWho.practitioner) {
      user = await this.practitionerService.findPractitionerById(payload.aud);
    } else {
      user = await this.patientService.findPatientById(payload.aud);
    }

    return user;
  }
}
