import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IFhirResource, IFindFhirResource, IImplementationGuide } from '../../models';
import { IFhirResourceRepository, IImplementationGuideRepository } from '../../repository';
import { logger, NotFoundError } from '../../utils';
import { IFhirResourceService } from './interfaces';

@injectable()
export class FhirResourceService implements IFhirResourceService {

  @inject(TYPES.FhirResourceRepository)
  private readonly fhirResourceRepository: IFhirResourceRepository;

  @inject(TYPES.ImplementationGuideRepository)
  private readonly implementationGuideRepository: IImplementationGuideRepository;

  public async findAll(): Promise<IFhirResource[]> {
    logger.info('Running FhirResourceService.findAll');
    return this.fhirResourceRepository.findAll();
  }

  public async create(data: IFhirResource): Promise<IFhirResource> {
    logger.info('Running FhirResourceService.create');
    return this.fhirResourceRepository.create(data);
  }

  public async findOne(data: IFindFhirResource): Promise<IFhirResource | undefined> {
    logger.info('Running FhirResourceService.findOne');
    return this.fhirResourceRepository.findOne(data);
  }

  public async attachImplementationGuide(fhirResourceId: string, implementationGuideId: string): Promise<any> {
    logger.info('Running FhirResourceService.attachImplementationGuide');

    const fhirResource: IFhirResource | undefined = await this.fhirResourceRepository.findOne({ id: fhirResourceId });

    if (!fhirResource) {
      throw new NotFoundError('Fhir resource not found');
    }
    const implementationGuide: IImplementationGuide | undefined = await this.implementationGuideRepository.findOne({ id: implementationGuideId });

    if (!implementationGuide) {
      throw new NotFoundError('Implementation guide not found');
    }

    return this.fhirResourceRepository.attachImplementationGuide(implementationGuideId, fhirResourceId);
  }

  public async detachIGFromFR(fr_id: string, ig_id: string): Promise<any> {
    logger.info('Running FhirResourceService.detachIGFromFR');

    const fhirResource: IFhirResource | undefined = await this.fhirResourceRepository.findOne({ id: fr_id });

    if (!fhirResource) {
      throw new NotFoundError('Fhir resource not found');
    }

    const implementationGuide: IImplementationGuide | undefined = await this.implementationGuideRepository.findOne({ id: ig_id });

    if (!implementationGuide) {
      throw new NotFoundError('Implementation guide not found');
    }

    return this.fhirResourceRepository.detachImplementationGuide(ig_id, fr_id);
  }

  public async update(id: string, data: IFhirResource): Promise<IFhirResource> {
    logger.info('Running FhirResourceService.update');

    return this.fhirResourceRepository.update(id, data);
  }

  public async delete(id: string): Promise<number> {
    logger.info('Running FhirResourceService.delete');

    return this.fhirResourceRepository.delete(id);
  }

}
