import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import {
  IFindImplementationGuide,
  IImplementationGuide,
  ImplementationGuideModel
} from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IFhirResourceRepository, IImplementationGuideRepository } from './interfaces';


@injectable()
export class ImplementationGuideRepository extends BaseRepository implements IImplementationGuideRepository {

  @inject(TYPES.FhirResourceRepository)
  private readonly fhirResourceRepo: IFhirResourceRepository;

  constructor() {
    super(ImplementationGuideModel);
  }

  public async findAll(): Promise<IImplementationGuide[]> {
    logger.info('Running ImplementationGuideRepository.findAll');
    try {
      return await ImplementationGuideModel.query()
        .withGraphFetched('fhirResources(defaultSelects)')
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async findOne(data: IFindImplementationGuide | any): Promise<IImplementationGuide | undefined> {
    logger.info('Running ImplementationGuideRepository.findOne');
    try {
      return await ImplementationGuideModel.query()
        .withGraphFetched('fhirResources(defaultSelects)')
        .findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async attachFhirResource(implementationGuideId: string, fhirResourceId: string): Promise<any> {
    logger.info('Running ImplementationGuideRepository.attachFhirResource');

    const implementationGuide = await this.findById(implementationGuideId);
    const fhirResource = await this.findById(fhirResourceId);

    return implementationGuide.$relatedQuery('fhirResources')
      .relate(fhirResource);
  }

  public async detachFhirResource(ig_id: string, fr_id: string): Promise<any> {
    logger.info('Running ImplementationGuideRepository.detachFhirResource');

    const implementationGuide = await this.findById(ig_id);

    return implementationGuide.$relatedQuery('fhirResources')
      .unrelate().where('id', fr_id);
  }
}
