import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  AttachmentModel,
  IAttachment,
  PractitionersAttachmentModel,
  IPractitioner,
  IUser, IFindUser
} from '../../models';
import { IUserLoginParams } from '../auth';
import { S3Service } from '../awsS3';
import { CodeSystemService } from '../codeSystems';
import { PractitionerRepository } from '../../repository';
import {
  error,
  forWho, GenericResponseError,
  InternalServerError,
  throwError, UtilityService
} from '../../utils';
import { FhirServerService } from '../fhirServer';
import { PlatformSdkService } from '../platformSDK';
import { UserService } from '../users';

@injectable()
export class PractitionerService {
  @inject(TYPES.PractitionerRepository)
  private readonly practitionerRepo: PractitionerRepository;

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

  public async updatePractitioner(id: string, data: any): Promise<IPractitioner> {
    try {
      const { data: practitionerData } = await this.fhirServerService.communicate(
        `/Practitioner/${id}`,
        'PUT',
        data
      )

      return practitionerData;
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async findPractitionerById(id: string): Promise<IPractitioner> {
    const practitioner = await this.fhirServerService.communicate(`/Practitioner/${id}`, 'GET');

    return practitioner.data;
  }

  public async createPractitioner(data: any): Promise<any> {
    this.utilService.checkForRequiredFields(data);

    const {
      gender,
      first_name,
      last_name,
      email,
      phone,
      birth_date: birthDate,
    } = data;

    const existingUser: IUser = await this.userService.getOneUser({ email });

    if (existingUser) {
      throwError('User already exists!', error.badRequest);
    }

    delete data.phone;

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

    const practitionerResponse = await this.fhirServerService.communicate(
      '/Practitioner',
      'POST',
      practitionerData
    );
    const practitioner = practitionerResponse.data;
    const token = this.userService.generateJwtToken({ email, id: practitioner.id });
    const userData: IFindUser = {
      email,
      token,
      resource_id: practitioner.id,
      resource_type: forWho.practitioner,
    }

    await this.userService.createUser({
      ...data,
      ...userData
    });

    return {
      user: practitioner,
      auth_token: token,
    }
  }

  public async practitionerLogin(data: IUserLoginParams): Promise<any> {
    try {
      const { user, token } = data;
      await this.userService.updateUser(user.resourceId!, {...user, token});

      return await this.practitionerRepo.findPractitionerById(user.resourceId!);
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadAttachment(practitionerId: string, file: Express.Multer.File): Promise<IAttachment> {
    try {
      const practitioner: any = await this.findPractitionerById(practitionerId);

      if (!practitioner) {
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

      await PractitionersAttachmentModel.query()
        .insert({
          practitionerId: practitioner?.id,
          attachmentId: attachment?.id
        });

      return attachment;
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
