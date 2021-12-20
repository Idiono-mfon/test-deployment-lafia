import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { logger, NotFoundError } from '../../utils';
import { IFhirResourceRepository, ImplementationGuideRepository } from '../../repository';
import { IFhirResource, IFindImplementationGuide, IImplementationGuide } from '../../models';
import { IImplementationGuideService } from './interfaces';

@injectable()
export class ImplementationGuideService implements IImplementationGuideService {

  @inject(TYPES.ImplementationGuideRepository)
  private readonly implementationGuideRepository: ImplementationGuideRepository;

  @inject(TYPES.FhirResourceRepository)
  private readonly fhirResourceRepository: IFhirResourceRepository;

  public async findAll(): Promise<IFindImplementationGuide[]> {
    logger.info('Running ImplementationGuideService.findAll');

    return this.implementationGuideRepository.findAll();
  }

  public async create(data: IImplementationGuide): Promise<IImplementationGuide> {
    logger.info('Running ImplementationGuideService.create');

    return this.implementationGuideRepository.create(data);
  }

  public async findOne(data: IFindImplementationGuide): Promise<IFindImplementationGuide | undefined> {
    logger.info('Running ImplementationGuideService.findOne');
    return this.implementationGuideRepository.findOne(data);
  }

  public async attachFhirResource(fhirResourceId: string, implementationGuideId: string): Promise<any> {
    logger.info('Running ImplementationGuideService.attachFhirResource');

    const fhirResource: IFhirResource | undefined = await this.fhirResourceRepository.findOne({ id: fhirResourceId });

    if (!fhirResource) {
      throw new NotFoundError('Fhir resource not found');
    }

    const implementationGuide: IImplementationGuide | undefined = await this.implementationGuideRepository.findOne({ id: implementationGuideId });

    if (!implementationGuide) {
      throw new NotFoundError('Implementation guide not found');
    }

    return this.implementationGuideRepository.attachFhirResource(implementationGuideId, fhirResourceId);
  }

  public async detachFRFromIG(fr_id: string, ig_id: string): Promise<any> {
    logger.info('Running ImplementationGuideService.detachFRFromIG');

    const fhirResource: IFhirResource | undefined = await this.fhirResourceRepository.findOne({ id: fr_id });

    if (!fhirResource) {
      throw new NotFoundError('Fhir resource not found');
    }

    const implementationGuide: IImplementationGuide | undefined = await this.implementationGuideRepository.findOne({ id: ig_id });

    if (!implementationGuide) {
      throw new NotFoundError('Implementation guide not found');
    }

    return this.implementationGuideRepository.detachFhirResource(ig_id, fr_id);
  }

  public async update(id: string, data: IImplementationGuide): Promise<IImplementationGuide> {
    logger.info('Running ImplementationGuideService.update');

    return this.implementationGuideRepository.update(id, data);
  }

  public async delete(id: string): Promise<number> {
    logger.info('Running ImplementationGuideService.delete');

    return this.implementationGuideRepository.delete(id);
  }

}
