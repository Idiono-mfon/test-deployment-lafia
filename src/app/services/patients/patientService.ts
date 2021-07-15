import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../../config/types';
import {
  IUser,
  AttachmentModel,
  IAttachment,
  PatientsAttachmentModel,
  IPatient,
  IContactPoint,
  ICommunication,
  IPatientContact,
  ICodeableConcept, IFindUser
} from '../../models';
import { IUserLoginParams } from '../auth';
import { S3Service } from '../awsS3';
import { CodeSystemService } from '../codeSystems';
import { PatientRepository } from '../../repository';
import { FhirServerService } from '../fhirServer';
import { PlatformSdkService } from '../platformSDK';
import {
  codeType, error,
  forWho, GenericResponseError,
  InternalServerError,
  throwError, UtilityService
} from '../../utils';
import { UserService } from '../users';

@injectable()
export class PatientService {
  @inject(TYPES.PatientRepository)
  private readonly patientRepo: PatientRepository;

  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

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
      const dob = this.utilService.extractDateOfBirth(data, forWho.patient);
      const maritalStatus: ICodeableConcept = await this.utilService.extractCodeableConcept(data, forWho.patient, codeType.maritalStatus);
      const patientName = this.utilService.extractName(data, forWho.patient);
      const patientAddress = this.utilService.extractAddress(data, forWho.patient);
      const patientContact: IPatientContact = await this.utilService.getContact(data, forWho.patientContact, codeType);
      const patientCommunication: ICommunication = {
        language: await this.utilService.extractCodeableConcept(data, forWho.patient, codeType.language),
        preferred: true
      };
      const telecom: IContactPoint[] = this.utilService.extractContactPoint(data, forWho.patient);

      let patient: IPatient = {
        active: true,
        resourceType: _.capitalize(forWho.patient),
        gender: data.patient_gender,
        birthDate: dob,
        maritalStatus,
        name: patientName,
        address: patientAddress,
        telecom,
        contact: patientContact,
        communication: patientCommunication
      };

      const patientOldData = await this.getPatientObjectIdsById(id);

      this.utilService.removeFalsyProps(patientOldData);
      this.utilService.mergeDataForUpdate(patient, patientOldData);

      return await this.patientRepo.updatePatient(patient);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async findPatientById(id: string): Promise<IPatient> {
    return this.patientRepo.findPatientById(id);
  }

  public async createPatient(data: any): Promise<any> {
    try {
      this.utilService.checkForRequiredFields(data);

      const {
        gender,
        first_name,
        last_name,
        email,
        phone
      } = data;

      const existingUser: IUser = await this.userService.getOneUser({ email });

      if (existingUser) {
        throwError('User already exists!', error.badRequest);
      }

      delete data.phone;

      const user = await this.userService.createUser(data);

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

      const patientResponse = await this.fhirServerService.communicate('/Patient', 'POST', patientData);
      const patient = patientResponse.data;
      const token = this.userService.generateJwtToken({ email, id: patient.id });
      const userData: IFindUser = {
        token,
        resource_id: patient.id,
        resource_type: forWho.patient,
      }
      await this.userService.updateUser(user.id!, userData);

      return {
        user: patient,
        auth_token: token,
      }
    } catch (e) {
      console.log(e.code.data);
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async patientLogin(data: IUserLoginParams): Promise<any> {
    try {
      const { user, token } = data;
      await this.userService.updateUser(user.resourceId!, {...user, token});

      return await this.patientRepo.findPatientById(user.resourceId!);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  private async getPatientObjectIdsById(id: string): Promise<any> {
    return this.patientRepo.getIds(id);
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
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
