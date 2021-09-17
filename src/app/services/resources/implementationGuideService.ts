import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IFhirResource, IFindImplementationGuide, IImplementationGuide } from '../../models';
import {
  FhirResourceRepository,
  ImplementationGuideRepository
} from '../../repository';
import { NotFoundError } from '../../utils';

@injectable()
export class ImplementationGuideService {

  @inject(TYPES.ImplementationGuideRepository)
  private readonly implementationGuideRepository: ImplementationGuideRepository;

  @inject(TYPES.FhirResourceRepository)
  private readonly fhirResourceRepository: FhirResourceRepository;

  // create
  public async fetchImplementationGuide(): Promise<IFindImplementationGuide[]> {
    return this.implementationGuideRepository.fetchImplementationGuide();
  }

  public async saveImplementationGuide(data: IImplementationGuide): Promise<IImplementationGuide> {
    return this.implementationGuideRepository.createImplementationGuide(data);
  }

  public async getOneImplementationGuide(data: IFindImplementationGuide): Promise<IFindImplementationGuide> {
    return this.implementationGuideRepository.getOneImplementationGuide(data);
  }

  // attach
  public async attachFhirResource(fhirResourceId: string, implementationGuideId: string): Promise<any> {
    const fhirResource: IImplementationGuide = await this.fhirResourceRepository.getOneFhirResource({id: fhirResourceId});
    if ( !fhirResource ) {
      throw new NotFoundError("Fhir resource not found");
    }
    const implementationGuide: IImplementationGuide = await this.implementationGuideRepository.getOneImplementationGuide({id: implementationGuideId});
    if ( !implementationGuide ) {
      throw new NotFoundError("Implementation guide not found");
    }
    return this.implementationGuideRepository.attachFhirResource(implementationGuideId, fhirResourceId);
  }

  // detach
  public async detachFRFromIG(fr_id: string, ig_id: string) {
    const fhirResource: IFhirResource = await this.fhirResourceRepository.getOneFhirResource({id: fr_id});
    if ( !fhirResource ) {
      throw new NotFoundError("Fhir resource not found");
    }
    const implementationGuide: IImplementationGuide = await this.implementationGuideRepository.getOneImplementationGuide({id: ig_id});
    if ( !implementationGuide ) {
      throw new NotFoundError("Implementation guide not found");
    }
    return this.implementationGuideRepository.detachFhirResource(ig_id, fr_id);
  }

  // update
  public async updateImplementationGuide(id: string, data: IImplementationGuide): Promise<IImplementationGuide> {
    return this.implementationGuideRepository.updateImplementationGuide(id, data);
  }

  // delete
  public async deleteImplementationGuide(id: string): Promise<number> {
    return this.implementationGuideRepository.deleteImplementationGuide(id);
  }

}
