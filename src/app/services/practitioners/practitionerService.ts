import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  IAttachment,
  IFhirServer,
  IFindUser,
  IPractitioner,
  IUser,
  ContactPointSystem,
  ContactPointUseValues,
  ICreatePractitionerDto,
  IPatientWithToken,
} from '../../models';
import { DbAccess } from '../../repository';
import {
  error,
  forWho,
  GenericResponseError,
  logger,
  NotFoundError,
  throwError,
  IUtilityService,
  getE164Format,
  Password,
} from '../../utils';
import { IUserLoginParams } from '../auth';
import { IS3Service } from '../aws';
import { ICodeSystemService } from '../codeSystems';
import { IUserService } from '../users';
import { IPractitionerService } from './interfaces';
import { FhirResource, FhirResourceMethods } from '../fhirServer';

@injectable()
export class PractitionerService implements IPractitionerService {
  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: ICodeSystemService;

  @inject(TYPES.S3Service)
  private readonly s3Service: IS3Service;

  @inject(TYPES.UtilityService)
  private readonly utilService: IUtilityService;

  @inject(TYPES.UserService)
  private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  @inject(TYPES.VideoBroadcastRepository)
  private readonly videoBroadcastRepository: DbAccess;

  @inject(TYPES.PractitionerVideoBroadcastRepository)
  private readonly practitionerVideoBroadcastRepository: DbAccess;

  public async update(id: string, data: any): Promise<IPractitioner> {
    logger.info('Running PractitionerService.update');
    try {
      const { data: practitionerData } = await this.fhirServerService.executeQuery(
        `/${FhirResource.Practitioner}/${id}`,
        FhirResourceMethods.PUT,
        {
          data,
        }
      );

      logger.info(`Successfully updated practitioner data with an id - ${id}`);

      return practitionerData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IPractitioner> {
    logger.info('Running PractitionerService.findById');
    const practitioner = await this.fhirServerService.executeQuery(
      `/${FhirResource.Practitioner}/${id}`,
      FhirResourceMethods.GET
    );

    return practitioner.data;
  }

  public async create(data: ICreatePractitionerDto): Promise<IPatientWithToken> {
    logger.info('Running PractitionerService.create');
    this.utilService.checkForRequiredFields(data);

    const { gender, first_name, last_name, birth_date: birthDate } = data;

    let { phone, email, isEmail, ip, emailOrPhone, password, ...others } = data;

    let existingUser: Partial<IUser> = {};

    let uniqueUserParam: Partial<IUser> = {};

    let has_verified_phone: boolean = false;
    let has_verified_email: boolean = false;

    if (isEmail) {
      existingUser = await this.userService.findOne({ email });
      // Email Address verified
      has_verified_email = true;

      uniqueUserParam = { email, has_verified_email };
    } else {
      phone = getE164Format(phone!, ip);
      existingUser = await this.userService.findOne({ phone });
      // Phone Nos verified
      has_verified_phone = true;
      //test email added to bypass database not-nullable constraint on email field
      email = `${phone}@lafia-practitioner.com`;
      uniqueUserParam = { phone, email, has_verified_phone };
    }

    if (existingUser) {
      throwError('User already exists!', error.badRequest);
    }

    const practitionerData: IPractitioner = {
      resourceType: 'Practitioner',
      id: phone,
      active: true,
      gender,
      birthDate,
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

    const practitionerResponse = await this.fhirServerService.executeQuery(
      `/${FhirResource.Practitioner}`,
      FhirResourceMethods.POST,
      { data: practitionerData }
    );
    const practitioner = practitionerResponse.data;

    const tokenPayload = data.isEmail
      ? { email, id: String(practitioner.id) }
      : { phone, id: String(practitioner.id) };

    // const token = this.userService.generateJwtToken({ email, id: practitioner.id });
    const token = this.userService.generateJwtToken(tokenPayload);

    const userData: IFindUser = {
      token,
      resource_id: practitioner.id,
      resource_type: forWho.practitioner,
    };

    const userPassword = await Password.hash(data.password);

    await this.userService.create({
      ...uniqueUserParam,
      ...others,
      password: userPassword,
      ...userData,
    });

    logger.info(`A new practitioner with id - ${practitioner.id} - has been created`);

    return {
      user: practitioner,
      auth_token: token,
    };
  }

  public async login(data: IUserLoginParams): Promise<any> {
    logger.info('Running PractitionerService.login');
    try {
      const { user, token } = data;

      if (user.photo === null) {
        delete user.photo;
      }

      await this.userService.update(user.id!, { ...user, token });

      const { data: practitionerData } = await this.fhirServerService.executeQuery(
        `/${FhirResource.Practitioner}/${user.resourceId}`,
        FhirResourceMethods.GET
      );

      return practitionerData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadAttachment(
    practitionerId: string,
    file: Express.Multer.File
  ): Promise<IAttachment> {
    logger.info('Running PractitionerService.uploadAttachment');
    try {
      const practitioner: any = await this.findById(practitionerId);

      if (!practitioner) {
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

      await this.userService.update(practitioner.id!, {
        photo: fileLink,
      });

      return attachmentData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findAssignedPractitionerVideoBroadcast(practitionerId: string): Promise<any> {
    logger.info('Running PractitionerService.findAssignedPractitionerVideoBroadcast');
    const practitioner = await this.findById(practitionerId);
    if (!practitioner) {
      throw new NotFoundError('Resource with the provided id does not exist');
    }
    // return this.practitionerVideoBroadcastRepository.findById(practitionerId);
    return this.practitionerVideoBroadcastRepository.findAll(practitionerId);
  }
}
