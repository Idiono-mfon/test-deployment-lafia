import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IFhirResource, IFindFhirResource, IImplementationGuide } from '../../models';
import {
  FhirResourceRepository,
  ImplementationGuideRepository
} from '../../repository';
import { NotFoundError } from '../../utils';

@injectable()
export class FhirResourceService {

  @inject(TYPES.FhirResourceRepository)
  private readonly fhirResourceRepository: FhirResourceRepository;

  @inject(TYPES.ImplementationGuideRepository)
  private readonly implementationGuideRepository: ImplementationGuideRepository;

  // create
  public async fetchFhirResources(): Promise<IFhirResource[]> {
    return this.fhirResourceRepository.fetchFhirResources();
  }

  public async saveFhirResources(data: IFhirResource): Promise<IFhirResource> {
    return this.fhirResourceRepository.createFhirResource(data);
  }

  public async getOneFhirResource(data: IFindFhirResource): Promise<IFhirResource> {
    return this.fhirResourceRepository.getOneFhirResource(data);
  }

  // attach
  public async attachImplementationGuide(fhirResourceId: string, implementationGuideId: string): Promise<any> {

    const fhirResource: IFhirResource = await this.fhirResourceRepository.getOneFhirResource({id: fhirResourceId});

    if ( !fhirResource ) {
      throw new NotFoundError("Fhir resource not found");
    }
    const implementationGuide: IImplementationGuide = await this.implementationGuideRepository.getOneImplementationGuide({id: implementationGuideId});
    if ( !implementationGuide ) {
      throw new NotFoundError("Implementation guide not found");
    }
    
    return this.fhirResourceRepository.attachImplementationGuide(implementationGuideId, fhirResourceId);
  }

  // detach
  public async detachIGFromFR(fr_id: string, ig_id: string) {
    const fhirResource: IFhirResource = await this.fhirResourceRepository.getOneFhirResource({id: fr_id});
    if ( !fhirResource ) {
      throw new NotFoundError("Fhir resource not found");
    }
    const implementationGuide: IImplementationGuide = await this.implementationGuideRepository.getOneImplementationGuide({id: ig_id});
    if ( !implementationGuide ) {
      throw new NotFoundError("Implementation guide not found");
    }
    return this.fhirResourceRepository.detachImplementationGuide(ig_id, fr_id);
  }

  // update

  public async updateFhirResource(id: string, data: IFhirResource): Promise<IFhirResource> {
    return this.fhirResourceRepository.updateFhirResource(id, data);
  }

  // delete

  public async deleteFhirResource(id: string): Promise<number> {
    return this.fhirResourceRepository.deleteFhirResource(id);
  }
  
}
