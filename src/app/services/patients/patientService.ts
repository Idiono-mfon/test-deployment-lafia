import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  IAttachment,
  IFhirServer,
  IFindUser,
  IPatient,
  IPatientWithToken,
  IUser,
  ContactPointSystem,
  ContactPointUseValues,
  ICreatePatientDto,
} from '../../models';
import {
  error,
  forWho,
  GenericResponseError,
  getE164Format,
  IUtilityService,
  logger,
  NotFoundError,
  throwError,
  Password,
} from '../../utils';

import { IUserLoginParams } from '../auth';
import { IS3Service } from '../aws';
import { IUserService } from '../users';
import { IVideoBroadcastService } from '../videoRecords';
import { IPatientService } from './interfaces';
import { FhirResource, FhirResourceMethods } from '../fhirServer';

@injectable()
export class PatientService implements IPatientService {
  @inject(TYPES.VideoBroadcastService)
  private readonly videoBroadcastService: IVideoBroadcastService;

  @inject(TYPES.S3Service)
  private readonly s3Service: IS3Service;

  @inject(TYPES.UtilityService)
  private readonly utilService: IUtilityService;

  @inject(TYPES.UserService)
  private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  public async update(id: string, data: any): Promise<IPatient> {
    logger.info('Running PatientService.update');
    try {
      const { data: patientUpdatedData } = await this.fhirServerService.executeQuery(
        `/${FhirResource.Patient}/${id}`,
        FhirResourceMethods.PUT,
        {
          data,
        }
      );

      logger.info(`Successfully updated patient data with an id - ${id}`);

      return patientUpdatedData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IPatient> {
    logger.info('Running PatientService.findById');
    const patient = await this.fhirServerService.executeQuery(
      `/${FhirResource.Patient}/${id}`,
      FhirResourceMethods.GET
    );

    return patient.data;
  }

  public async create(data: ICreatePatientDto, ip?: string): Promise<IPatientWithToken> {
    logger.info('Running PatientService.create');
    try {
      this.utilService.checkForRequiredFields(data);

      const { gender, first_name, last_name, birth_date, care_type, country } = data;

      let { phone, email } = data;

      let existingUser: Partial<IUser> = {};

      let uniqueUserParam: Partial<IUser> = {};

      let has_verified_phone: boolean = false;
      let has_verified_email: boolean = false;

      if (data.isEmail) {
        existingUser = await this.userService.findOne({ email });
        // Email Address verified
        has_verified_email = true;

        uniqueUserParam = { email };
      } else {
        phone = getE164Format(phone!, ip);
        existingUser = await this.userService.findOne({ phone });
        // Phone Nos Address verified
        has_verified_phone = true;
        //test email added to bypass database not-nullable constraint on email field
        email = `${phone}@lafia-patient.com`;
        uniqueUserParam = { phone, email };
      }

      if (existingUser) {
        throwError('User already exists!', error.badRequest);
      }

      // creating the patient fhir resource
      const patientData: IPatient = {
        resourceType: 'Patient',
        id: phone,
        active: true,
        gender: gender?.toLowerCase()!,
        name: {
          use: 'official',
          text: `${first_name} ${last_name}`,
          family: last_name,
          given: [first_name],
        },
        telecom: [
          {
            system: ContactPointSystem.email,
            use: ContactPointUseValues.home,
            rank: 0,
            value: email,
          },
          {
            system: ContactPointSystem.phone,
            use: ContactPointUseValues.mobile,
            rank: 0,
            value: phone,
          },
        ],
      };

      const patientResponse = await this.fhirServerService.executeQuery(
        `/${FhirResource.Patient}`,
        FhirResourceMethods.POST,
        {
          data: patientData,
        }
      );
      const patient = patientResponse.data;

      const tokenPayload = data.isEmail
        ? { email, id: String(patient.id) }
        : { phone, id: String(patient.id) };

      // const token = this.userService.generateJwtToken({ email, id: String(patient.id) });

      const token = this.userService.generateJwtToken(tokenPayload);

      const userData: IFindUser = {
        token,
        resource_id: patient.id,
        resource_type: forWho.patient,
      };

      // data.hasVerifiedPhone = true;

      // Hash user password
      const userPassword = await Password.hash(data.password);

      await this.userService.create({
        ...uniqueUserParam,
        has_verified_email,
        has_verified_phone,
        password: userPassword,
        gender,
        first_name,
        last_name,
        birth_date,
        care_type,
        country,
        ...userData,
      });

      logger.info(`A new patient with id - ${patient.id} - has been created`);

      return {
        user: patient,
        auth_token: token,
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async login(data: IUserLoginParams): Promise<any> {
    logger.info('Running PatientService.login');
    try {
      const { user, token } = data;

      if (user.photo === null) {
        delete user.photo;
      }

      if (user.phone === null) {
        delete user.phone;
      }

      await this.userService.update(user.id!, { ...user, token });

      const { data: patientData } = await this.fhirServerService.executeQuery(
        `/${FhirResource.Patient}/${user.resourceId}`,
        FhirResourceMethods.GET
      );

      return patientData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadAttachment(
    patientId: string,
    file: Express.Multer.File
  ): Promise<IAttachment> {
    logger.info('Running PatientService.uploadAttachment');
    try {
      const patient: any = await this.findById(patientId);

      if (!patient) {
        throwError('Resource with the provided id does not exist', error.notFound);
      }

      const fileLink = await this.s3Service.uploadFile(file);

      const { size, originalname, mimetype } = file;

      const attachmentData: IAttachment = {
        contentType: mimetype,
        size,
        title: originalname,
        url: fileLink,
        creation: new Date(),
      };

      await this.userService.update(patient.id!, {
        photo: fileLink,
      });

      return attachmentData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findPatientVideoBroadcast(patientId: string) {
    logger.info('Running PatientService.findPatientVideoBroadcast');
    const patient = await this.findById(patientId);

    if (!patient) {
      throw new NotFoundError('Resource with the provided id does not exist');
    }
    return this.videoBroadcastService.findAll(patientId);
  }
}
