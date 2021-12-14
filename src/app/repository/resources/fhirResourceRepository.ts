import { injectable } from 'inversify';
import { IFindFhirResource, IFhirResource, FhirResourceModel, ImplementationGuideModel } from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class FhirResourceRepository {

  public async fetchFhirResources(): Promise<IFhirResource[]> {
    logger.info('Running FhirResourceRepository.fetchFhirResources');
    try {
      return await FhirResourceModel.query();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async createFhirResource(fhirResource: IFhirResource): Promise<IFhirResource> {
    logger.info('Running FhirResourceRepository.createFhirResource');
    try {
      return await FhirResourceModel.query()
        .insert(fhirResource)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneFhirResource(data: IFindFhirResource | any): Promise<IFhirResource> {
    logger.info('Running FhirResourceRepository.getOneFhirResource');
    try {
      return await FhirResourceModel.query().withGraphFetched('implementationGuides').findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateFhirResource(id: string, data: IFhirResource): Promise<any> {
    logger.info('Running FhirResourceRepository.updateFhirResource');
    try {
      return await FhirResourceModel.query()
        .patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async attachImplementationGuide(implementationGuideId: string, fhirResourceId: string): Promise<any> {
    logger.info('Running FhirResourceRepository.attachImplementationGuide');
    return (await FhirResourceModel.query().findById(fhirResourceId)).$relatedQuery('implementationGuides')
      .relate(await ImplementationGuideModel.query().findById(implementationGuideId));
  }

  public async detachImplementationGuide(ig_id: string, fr_id: string) {
    logger.info('Running FhirResourceRepository.detachImplementationGuide');
    return (await FhirResourceModel.query().findById(fr_id)).$relatedQuery('implementationGuide')
      .unrelate().where('id', ig_id);
  }

  public async deleteFhirResource(id: string): Promise<any> {
    logger.info('Running FhirResourceRepository.deleteFhirResource');
    try {
      return await FhirResourceModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}
