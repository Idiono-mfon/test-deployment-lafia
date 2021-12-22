import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IAttachment, IFhirServer, IFindUser, IPractitioner, IUser } from '../../models';
import { DbAccess } from '../../repository';
import {
  error,
  forWho,
  GenericResponseError,
  logger,
  NotFoundError,
  throwError,
  IUtilityService
} from '../../utils';
import { IUserLoginParams } from '../auth';
import { IS3Service } from '../aws';
import { ICodeSystemService } from '../codeSystems';
import { IUserService } from '../users';
import { IPractitionerService } from './interfaces';

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
        `/Practitioner/${id}`,
        'PUT',
        { data }
      );

      logger.info(`Successfully updated practitioner data with an id - ${id}`);

      return practitionerData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async findById(id: string): Promise<IPractitioner> {
    logger.info('Running PractitionerService.findById');
    const practitioner = await this.fhirServerService.executeQuery(`/Practitioner/${id}`, 'GET');

    return practitioner.data;
  }

  public async create(data: any): Promise<any> {
    logger.info('Running PractitionerService.create');
    this.utilService.checkForRequiredFields(data);

    const {
      gender,
      first_name,
      last_name,
      email,
      phone,
      birth_date: birthDate,
    } = data;

    let existingUser: IUser = await this.userService.findOne({ email });

    if (!existingUser && phone) {
      existingUser = await this.userService.findOne({ phone });
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

    const practitionerResponse = await this.fhirServerService.executeQuery(
      '/Practitioner',
      'POST',
      { data: practitionerData }
    );
    const practitioner = practitionerResponse.data;
    const token = this.userService.generateJwtToken({ email, id: practitioner.id });
    const userData: IFindUser = {
      email,
      token,
      resource_id: practitioner.id,
      resource_type: forWho.practitioner,
    }

    await this.userService.create({
      ...data,
      ...userData
    });

    logger.info(`A new practitioner with id - ${practitioner.id} - has been created`);

    return {
      user: practitioner,
      auth_token: token,
    }
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
        `/Practitioner/${user.resourceId}`,
        'GET'
      );

      return practitionerData;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadAttachment(practitionerId: string, file: Express.Multer.File): Promise<IAttachment> {
    logger.info('Running PractitionerService.uploadAttachment');
    try {
      const practitioner: any = await this.findById(practitionerId);

      if (!practitioner) {
        throwError('Resource with the provided id does not exist', error.notFound);
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
    const practitioner = await this.findById(practitionerId)
    if (!practitioner) {
      throw new NotFoundError('Resource with the provided id does not exist');
    }
    return this.practitionerVideoBroadcastRepository.findById(practitionerId);
  }
}
