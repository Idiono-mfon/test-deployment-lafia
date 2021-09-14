import { inject, injectable } from 'inversify';
import { Request } from 'express';
import TYPES from '../../config/types';
import { IUser } from '../../models';
import { forWho, GenericResponseError, getE164Format } from '../../utils';
import { PatientService } from '../patients';
import { PlatformSdkService } from '../platformSDK';
import { PractitionerService } from '../practitioners';
import { UserService } from '../users';
import * as _ from 'lodash';

@injectable()
export class AuthService {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;

  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;

  @inject(TYPES.UserService)
  private userService: UserService;

  @inject(TYPES.PlatformSdkService)
  private platformSdkService: PlatformSdkService;

  public async login(email: string, password: string, req: Request): Promise<any> {
    try {

      if (_.isNumber(email)) {
          email = getE164Format(email, req);
      }

      const loggedInUser: IUser = await this.userService.userLogin(email, password);

      const token = this.userService.generateJwtToken({ email, id: loggedInUser.resourceId });
      let loggedInUserData: any;

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
}
