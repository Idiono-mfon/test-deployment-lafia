import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../../config/types';
import { AttachmentModel, IAttachment } from '../../models/attachments';
import { PractitionersAttachmentModel } from '../../models/practitionersAttachments';
import { IPractitioner } from '../../models/practitioners';
import { IQualification } from '../../models/qualifications';
import { S3Service } from '../awsS3';
import { CodeSystemService } from '../codeSystems';
import { PractitionerRepository } from '../../repository';
import { IContactPoint } from '../../models/contactPoints';
import { ICommunication } from '../../models/communications';
import {
  codeType, error,
  forWho,
  InternalServerError,
  throwError, UtilityService
} from '../../utils';
import { PlatformSdkService } from '../platformSDK';

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

  public async updatePractitioner(id: string, data: any): Promise<IPractitioner> {
    try {
      const dob = this.utilService.extractDateOfBirth(data, forWho.practitioner);
      const practitionerName = this.utilService.extractName(data, forWho.practitioner);
      const practitionerAddress = this.utilService.extractAddress(data, forWho.practitioner);
      const practitionerCommunication: ICommunication = {
        language: await this.utilService.extractCodeableConcept(data, forWho.practitioner, codeType.language),
        preferred: true
      };
      const telecom: IContactPoint[] = this.utilService.extractContactPoint(data, forWho.practitioner);
      const qualification: IQualification | IQualification[] = await this.utilService.getQualification(data, forWho.practitioner, codeType.qualification);

      let practitioner: IPractitioner = {
        active: true,
        resourceType: _.capitalize(forWho.practitioner),
        gender: data.practitioner_gender,
        birthDate: dob,
        name: practitionerName,
        address: practitionerAddress,
        telecom,
        communication: practitionerCommunication,
        qualification,
      };

      const practitionerOldData = await this.getPractitionerObjectIdsById(id);

      this.utilService.removeFalsyProps(practitionerOldData);
      this.utilService.mergeDataForUpdate(practitioner, practitionerOldData);

      return await this.practitionerRepo.updatePractitioner(practitioner);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async findPractitionerById(id: string): Promise<IPractitioner> {
    return this.practitionerRepo.findPractitionerById(id);
  }

  public async createPractitioner(data: any): Promise<IPractitioner> {
    this.utilService.checkForRequiredFields(data);

    const {
      gender,
      first_name,
      last_name,
      email,
      password,
      department,
      birth_date: birthDate,
    } = data;

    // Todo: Create the user in our platform sdk

    const practitionerData: IPractitioner = {
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
        }
      ],
    };

    return await this.practitionerRepo.createPractitioner(practitionerData);
  }

  private async getPractitionerObjectIdsById(id: string): Promise<any> {
    return this.practitionerRepo.getIds(id);
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
