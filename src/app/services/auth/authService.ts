import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { error, forWho, GenericResponseError, throwError } from '../../utils';
import { PatientService } from '../patients';
import { PlatformSdkService } from '../platformSDK';
import { PractitionerService } from '../practitioners';
import { UserService } from '../users';

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

  public async login(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.getOneUser({ email });

      if (!user) {
        throwError('Invalid email or password', error.badRequest);
      }

      const loggedInUser = await this.userService.userLogin(email, password);

      const token = this.userService.generateJwtToken({ email, id: user.resourceId });
      let loggedInUserData: any;

      if (loggedInUser.resourceType === forWho.patient) {
        loggedInUserData = await this.patientService.patientLogin({ user, token });
      }

      if (loggedInUser.resourceType === forWho.practitioner) {
        loggedInUserData = await this.practitionerService.practitionerLogin({ user, token });
      }

      return {
        user: loggedInUserData,
        auth_token: token
      }
    } catch (e) {
      throw new GenericResponseError('Invalid email or password', e.code);
    }
  }
}
