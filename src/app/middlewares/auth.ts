import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';
import jwt from 'jsonwebtoken';
import { Env } from '../config/env';
import TYPES from '../config/types';
import { IPatient, IPractitioner, IUser } from '../models';
import { PatientService, PractitionerService, UserService } from '../services';

interface CastJWTDecodedType {
  email: string;
  iat?: number;
  aud: string
}

const env = Env.all();

@injectable()
export class AuthMiddleware extends BaseMiddleware {

  @inject(TYPES.UserService)
  private readonly userService: UserService;
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;

  public async handler(req: Request, res: Response, next: NextFunction) {
    try {

      const jwtPayload: CastJWTDecodedType = this.decodeJwtToken(req);
      const user = await this.getUserPayload(jwtPayload);

      // res.locals.token = jwtPayload.token as string;
      res.locals.user = user;
      req.body.user = user;

      next();
    } catch (e: any) {
      console.log('Error:', e);
      res.status(401).send({
        status: 'error',
        code: 401,
        message: 'Unable to authenticate'
      });
    }
  }

  public authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const jwtPayload: CastJWTDecodedType = this.decodeJwtToken(req);
      const user = await this.getUserPayload(jwtPayload);

      //res.locals.token = jwtPayload.token as string;
      res.locals.user = user;

      next();
    } catch (e: any) {
      console.log('Error:', e);
      res.status(401).send({
        status: 'error',
        code: 401,
        message: 'Unable to authenticate'
      });
    }
  }

  private decodeJwtToken(req: Request): CastJWTDecodedType {
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

  public static parseThirdPartyConnection = (req: Request, res: Response, next: NextFunction): void => {
    const oauth: string = req.headers['x-oauth'] as string;
    const connectionName: string = req.headers['x-connection-name'] as string;
    if (!oauth) {
      next();
    }
    res.locals.connection = { "x-oauth": oauth, "x-connection-name": connectionName }
    next()
  }

  private async getUserPayload(payload: CastJWTDecodedType): Promise<IUser | IPatient | IPractitioner> {
    let user: IUser | IPatient | IPractitioner = await this.patientService.findPatientById(payload.aud);

    if (!user) {
      user = await this.practitionerService.findPractitionerById(payload.aud);
    }

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
