import { injectable } from 'inversify';
import { FhirResourceModel, IFindImplementationGuide, IImplementationGuide, ImplementationGuideModel } from '../../models';
import { InternalServerError } from '../../utils';

@injectable()
export class ImplementationGuideRepository {

  public async fetchImplementationGuide(): Promise<IImplementationGuide[]> {
    try {
      return await ImplementationGuideModel.query()
        .withGraphFetched('fhirResources(defaultSelects)')
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async createImplementationGuide(implementationGuide: IImplementationGuide): Promise<IImplementationGuide> {
    try {
      return await ImplementationGuideModel.query()
        .insert(implementationGuide)
        .returning('*');
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getOneImplementationGuide(data: IFindImplementationGuide | any): Promise<IImplementationGuide> {
    try {
      return await ImplementationGuideModel.query().withGraphFetched('fhirResources(defaultSelects').findOne(data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateImplementationGuide(id: string, data: IFindImplementationGuide): Promise<any> {
    try {
      return await ImplementationGuideModel.query()
        .patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async attachFhirResource(implementationGuideId: string, fhirResourceId: string): Promise<any> {
    return (await ImplementationGuideModel.query().findById(implementationGuideId)).$relatedQuery('fhirResources')
      .relate(await FhirResourceModel.query().findById(fhirResourceId));
  }

  public async detachFhirResource(ig_id: string, fr_id: string) {
    return (await ImplementationGuideModel.query().findById( ig_id )).$relatedQuery('fhirResources')
      .unrelate().where('id', fr_id);
  }

  public async deleteImplementationGuide(id: string): Promise<any> {
    try {
      return await ImplementationGuideModel.query().deleteById(id);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }
}
