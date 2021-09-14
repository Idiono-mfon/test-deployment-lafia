import { Request } from 'express';
import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { AttachmentModel, IAttachment, IFindUser, IPatient, IUser, PatientsAttachmentModel } from '../../models';
import { PatientRepository } from '../../repository';
import {
  error,
  forWho,
  GenericResponseError,
  getE164Format,
  InternalServerError,
  NotFoundError,
  throwError,
  UtilityService
} from '../../utils';
import { IUserLoginParams } from '../auth';
import { S3Service } from '../aws';
import { CodeSystemService } from '../codeSystems';
import { FhirServerService } from '../fhirServer';
import { PlatformSdkService } from '../platformSDK';
import { UserService } from '../users';
import { VideoBroadcastService } from '../videoRecords';

@injectable()
export class PatientService {
  @inject(TYPES.PatientRepository)
  private readonly patientRepo: PatientRepository;

  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

  @inject(TYPES.VideoBroadcastService)
  private readonly videoBroadcastService: VideoBroadcastService;

  @inject(TYPES.S3Service)
  private readonly s3Service: S3Service;

  @inject(TYPES.UtilityService)
  private readonly utilService: UtilityService;

  @inject(TYPES.PlatformSdkService)
  private readonly platformSdkService: PlatformSdkService;

  @inject(TYPES.UserService)
  private readonly userService: UserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;

  public async updatePatient(id: string, data: any): Promise<IPatient> {
    try {

      const { data: patientUpdatedData } = await this.fhirServerService.executeQuery(
        `/Patient/${id}`,
        'PUT',
        data
      );

      return patientUpdatedData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findPatientById(id: string): Promise<IPatient> {
    const patient = await this.fhirServerService.executeQuery(`/Patient/${id}`, 'GET');

    return patient.data;
  }

  public async createPatient(req: Request): Promise<any> {
    try {

      const data: any = req.body;

      this.utilService.checkForRequiredFields(data);

      const {
        gender,
        first_name,
        last_name,
        email
      } = data;

      let { phone } = data;

      if (phone) {
        phone = getE164Format(phone!, req);
      }

      const existingUser: IUser = await this.userService.getOneUser({ email });

      if (existingUser) {
        throwError('User already exists!', error.badRequest);
      }

      const patientData: IPatient = {
        resourceType: 'Patient',
        id: phone,
        active: true,
        gender: gender.toLowerCase(),
        name: {
          use: 'official',
          text: `${first_name} ${last_name}`,
          family: last_name,
          given: [first_name]
        },
        telecom: [
          {
            system: 'email',
            use: 'home',
            rank: 0,
            value: email
          },
          {
            system: 'phone',
            use: 'mobile',
            rank: 0,
            value: phone
          }
        ],
      };

      const patientResponse = await this.fhirServerService.executeQuery('/Patient', 'POST', patientData);
      const patient = patientResponse.data;
      const token = this.userService.generateJwtToken({ email, id: patient.id });
      const userData: IFindUser = {
        token,
        resource_id: patient.id,
        resource_type: forWho.patient,
      }

      data.hasVerifiedPhone = true;

      await this.userService.createUser({
        ...data,
        ...userData,
      });

      return {
        user: patient,
        auth_token: token,
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async patientLogin(data: IUserLoginParams): Promise<any> {
    try {
      const { user, token } = data;
      await this.userService.updateUser(user.id!, {...user, token});

      const { data: patientData } = await this.fhirServerService.executeQuery(
        `/Patient/${user.resourceId}`,
        'GET'
      );

      return patientData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadAttachment(patientId: string, file: Express.Multer.File): Promise<IAttachment> {
    try {
      const patient: any = await this.findPatientById(patientId);

      if (!patient) {
        throwError('No User Record. Confirm the user id', error.notFound);
      }

      const fileLink = await this.s3Service.uploadFile(file);

      const {
        size,
        originalname,
        mimetype,
      } = file;

      const attachmentData: IAttachment = {
        contentType: mimetype,
        size,
        title: originalname,
        url: fileLink,
        creation: new Date(),
      };


      const attachment: IAttachment = await AttachmentModel.query()
        .insertAndFetch(attachmentData);

      await PatientsAttachmentModel.query()
        .insert({
          patientId: patient?.id,
          attachmentId: attachment?.id
        });

      return attachment;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findPatientVideoBroadcast(patientId: string) {
    const patient = this.findPatientById(patientId)
    if ( !patient ) {
      throw new NotFoundError("unknown patient");
    }
    return await this.videoBroadcastService.getAllVideoRecords(patientId);
  }

}
