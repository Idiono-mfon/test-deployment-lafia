import { inject, injectable } from 'inversify';
// import { v4 as uuid } from 'uuid';
import TYPES from '../../config/types';
import { IValueSetConceptService } from './interfaces';
import { Env, IEnv } from '../../config/env';
import { IValueSetConceptRepository } from '../../repository';
import {
  IValueSetConcept,
  IFhirServer,
  IValueSetConceptCreateDto,
  IFhirValueSet,
} from '../../models';
import { ValueSetService, IValueSetService } from '../valueSets';

import { GenericResponseError, logger, throwError, error } from '../../utils';
import { FhirResource, FhirResourceMethods } from '../fhirServer';

@injectable()
export class ValueSetConceptService implements IValueSetConceptService {
  @inject(TYPES.ValueSetConceptRepository)
  private valueSetConceptRepository: IValueSetConceptRepository;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  @inject(TYPES.ValueSetService)
  private readonly valueSetService: IValueSetService;

  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();
  }

  public async findOne(data: IValueSetConcept): Promise<IValueSetConcept> {
    logger.info('Running ValueSetConceptService.findOne');
    return this.valueSetConceptRepository.findOne<IValueSetConcept>(data);
  }

  public async findById(data: string): Promise<IValueSetConcept> {
    logger.info('Running ValueSetConceptService.findById');
    return this.valueSetConceptRepository.findById(data);
  }

  public async exists(data: IValueSetConcept): Promise<boolean> {
    logger.info('Running ValueSetConceptService.exists');

    try {
      const valueSetConcept = await this.findOne(data);
      return !!valueSetConcept;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IValueSetConceptCreateDto): Promise<IValueSetConcept> {
    logger.info('Running ValueSetConceptService.create');

    try {
      const valueSet = await this.valueSetService.findById(data.value_set_id);

      const ERROR_MESSAGE = 'This valueSet does not exist';

      if (!valueSet) {
        throwError(ERROR_MESSAGE, error.badRequest);
      }

      const fhirValueSetData: any = await this.fhirServerService.executeQuery(
        `${FhirResource.ValueSet}/${valueSet.resourceId}`,
        FhirResourceMethods.GET
      );

      const fhirValueSet: IFhirValueSet = fhirValueSetData.data;

      // Update Resource URL

      fhirValueSet.url = `${this.env.fhir_server_base_url}/${FhirResource.ValueSet}/${valueSet.resourceId}`;

      // Update Concepts
      fhirValueSet.compose = {
        include: [
          {
            system: data.system,
            concept: [...data.concepts],
          },
        ],
      };

      // Update ValueSet Record on FHIR
      await this.fhirServerService.executeQuery(
        `${FhirResource.ValueSet}/${valueSet.resourceId}`,
        FhirResourceMethods.PUT,
        { data: fhirValueSet }
      );

      // Create Record on Db

      const valueSetConcepts: IValueSetConcept[] = data.concepts.map((concept) => {
        return { ...concept, value_set_id: data.value_set_id, system: data.system };
      });

      return await this.valueSetConceptRepository.create<IValueSetConcept[]>(valueSetConcepts);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
