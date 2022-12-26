import { inject, injectable } from 'inversify';
// import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { IValueSetService } from './interfaces';
import { Env, IEnv } from '../../config/env';
import { IValueSetRepository, ValueSetRepository } from '../../repository';
import {
  IFhirServer,
  IValueSet,
  IFhirValueSet,
  IValueSetCreateDto,
  IContactDetail,
  ContactPointSystem,
  ContactPointUseValues,
} from '../../models';
import { GenericResponseError, logger, throwError } from '../../utils';
import { FhirResource, FhirResourceMethods } from '../fhirServer';

@injectable()
export class ValueSetService implements IValueSetService {
  @inject(TYPES.ValueSetRepository)
  private valueSetRepository: IValueSetRepository;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async findOne(data: IValueSet): Promise<IValueSet> {
    logger.info('Running ValueSetService.findOne');
    return this.valueSetRepository.findOne<IValueSet>(data);
  }

  public async findById(data: string): Promise<IValueSet> {
    logger.info('Running ValueSetService.findById');
    return this.valueSetRepository.findById(data);
  }

  public async findOnFhir(data: IValueSet): Promise<IFhirValueSet> {
    try {
      logger.info('Running ValueSetService.findOnFhir');
      const valueSet = await this.fhirServerService.executeQuery(
        `/ValueSet/${data.resource_id}`,
        'GET'
      );
      return valueSet.data;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async exists(data: string): Promise<boolean> {
    logger.info('Running ValueSetService.exists');

    try {
      const valueSet = await this.findById(data);
      return !!valueSet;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IValueSetCreateDto): Promise<IValueSet> {
    logger.info('Running ValueSetService.create');

    try {
      let emailContact: Partial<IContactDetail> = {};
      let phoneContact: Partial<IContactDetail> = {};

      const last_changed = new Date().toISOString();

      let contacts: IContactDetail[] | undefined;

      const lafiaContact: IContactDetail = {
        telecom: [
          {
            use: ContactPointUseValues.work,
            system: ContactPointSystem.url,
            value: 'https://fhir.staging.lafia.io/fhir',
          },
        ],
      };

      if (data.publisherEmail) {
        emailContact = {
          telecom: [
            {
              use: ContactPointUseValues.home,
              system: ContactPointSystem.email,
              value: data.publisherEmail,
            },
          ],
        };
      }

      if (data.publisherPhone) {
        phoneContact = {
          telecom: [
            {
              use: ContactPointUseValues.mobile,
              system: ContactPointSystem.phone,
              value: data.publisherPhone,
            },
          ],
        };
      }

      if (data.publisherEmail) {
        contacts = [emailContact];
      }

      if (data.publisherPhone) {
        contacts = [phoneContact];
      }

      if (data.publisherEmail && data.publisherPhone) {
        contacts = [phoneContact, emailContact];
      }

      const valueSetData: IFhirValueSet = {
        date: last_changed,
        resourceType: FhirResource.ValueSet,
        name: data.name,
        title: data.title,
        status: data.status,
        experimental: data.experimental,
        contact: data.publisherIsLafia ? [lafiaContact] : contacts ?? [lafiaContact],
        description: data.description || '',
        copyright: data.copyright || '',
      };

      // Submit record to FHIR Server
      const valueSetResponse = await this.fhirServerService.executeQuery(
        FhirResource.ValueSet,
        FhirResourceMethods.POST,
        { data: valueSetData }
      );
      const valueSet = valueSetResponse.data;

      const {
        publisherIsLafia,
        publisherName,
        publisherEmail,
        publisherPhone,
        publisherUrl,
        ...others
      } = data;

      return await this.valueSetRepository.create<IValueSet>({
        resource_id: valueSet.id,
        ...others,
        last_changed,
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
