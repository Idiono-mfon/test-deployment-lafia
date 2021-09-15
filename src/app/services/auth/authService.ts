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
import axios from 'axios';
import https from 'https'

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
      console.log(e);
      throw new GenericResponseError(e.toString(), e.code);
    }
  }

  public async getSaFHirAuth(): Promise<any> {
    // const resp = {
    //   authUrl: "https://api-dmdh-t31.safhir.io/v1/authorize?client_secret=86Otdvd4gSu1d8TQtAR__729oAezaST-t-&client_id=c1317a46-a048-4402-a181-2221fac4fc99&response_type=code&redirect_uri=https://app.lafia.io/safhir&scope=launch/patient%20fhirUser%20openid%20offline_access%20patient/List.read%20patient/MedicationKnowledge.read%20user/List.read%20user/MedicationKnowledge.read%20user/ExplanationOfBenefit.read%20user/Coverage.read%20user/AllergyIntolerance.read%20user/CarePlan.read%20user/CareTeam.read%20user/Condition.read%20user/Device.read%20user/DiagnosticReport.read%20user/DocumentReference.read%20user/Encounter.read%20user/Goal.read%20user/Immunization.read%20user/Location.read%20user/Medication.read%20user/MedicationRequest.read%20user/Observation.read%20user/Organization.read%20user/Patient.read%20user/Practitioner.read%20user/PractitionerRole.read%20user/Procedure.read%20user/Provenance.read%20patient/ExplanationOfBenefit.read%20patient/Coverage.read%20patient/AllergyIntolerance.read%20patient/CarePlan.read%20patient/CareTeam.read%20patient/Condition.read%20patient/Device.read%20patient/DiagnosticReport.read%20patient/DocumentReference.read%20patient/Encounter.read%20patient/Goal.read%20patient/Immunization.read%20patient/Location.read%20patient/Medication.read%20patient/MedicationRequest.read%20patient/Observation.read%20patient/Organization.read%20patient/Patient.read%20patient/Practitioner.read%20patient/PractitionerRole.read%20patient/Procedure.read%20patient/Provenance.read&aud=09b3d1b7-60c6-4149-ad29-cfbe9220f2de&state="
    // }

    // return resp;
  }

  public async getSaFHirToken(): Promise<any> {
    // const httpsAgent = new https.Agent({
    //   rejectUnauthorized: false,
    // })
    // axios.defaults.httpsAgent = httpsAgent
    // axios.post("https://api-dmdh-t31.safhir.io/v1/token", {
    //   data: ""
    // }).then( res => console.log(res))

    //return resp;
  }
}
