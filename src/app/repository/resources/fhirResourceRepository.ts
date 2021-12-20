import { injectable } from 'inversify';
import { BaseRepository } from '../base';
import { IFhirResourceRepository } from './interfaces';
import { InternalServerError, logger } from '../../utils';
import { IFindFhirResource, IFhirResource, FhirResourceModel, ImplementationGuideModel } from '../../models';

@injectable()
export class FhirResourceRepository extends BaseRepository implements IFhirResourceRepository {

  constructor() {
    super(FhirResourceModel);
  }

  public async findOne(data: IFindFhirResource | any): Promise<IFhirResource | undefined> {
    logger.info('Running FhirResourceRepository.findOne');

    try {
      return await FhirResourceModel.query().withGraphFetched('implementationGuides').findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async attachImplementationGuide(implementationGuideId: string, fhirResourceId: string): Promise<any> {
    logger.info('Running FhirResourceRepository.attachImplementationGuide');

    const fhirResource = await this.findById(fhirResourceId);
    const implementationGuide = await ImplementationGuideModel.query().findById(implementationGuideId);

    return fhirResource.$relatedQuery('implementationGuides')
      .relate(implementationGuide);
  }

  public async detachImplementationGuide(ig_id: string, fr_id: string): Promise<any> {
    logger.info('Running FhirResourceRepository.detachImplementationGuide');

    const fhirResource = await this.findById(fr_id);

    return fhirResource.$relatedQuery('implementationGuide')
      .unrelate().where('id', ig_id);
  }

}
