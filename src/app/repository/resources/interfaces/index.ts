import { DbAccess } from '../../base';

export interface IFhirResourceRepository extends DbAccess {
  detachImplementationGuide(ig_id: string, fr_id: string): Promise<any>;

  attachImplementationGuide(implementationGuideId: string, fhirResourceId: string): Promise<any>;
}

export interface IImplementationGuideRepository extends DbAccess {
  detachFhirResource(ig_id: string, fr_id: string): Promise<any>;

  attachFhirResource(implementationGuideId: string, fhirResourceId: string): Promise<any>;
}
