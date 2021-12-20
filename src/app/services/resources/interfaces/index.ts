import { IFhirResource, IFindFhirResource, IFindImplementationGuide, IImplementationGuide } from '../../../models';

export interface IFhirResourceService {
  findAll(): Promise<IFhirResource[]>;

  create(data: IFhirResource): Promise<IFhirResource>;

  findOne(data: IFindFhirResource): Promise<IFhirResource | undefined>;

  attachImplementationGuide(fhirResourceId: string, implementationGuideId: string): Promise<any>;

  detachIGFromFR(fr_id: string, ig_id: string): Promise<any>;

  update(id: string, data: IFhirResource): Promise<IFhirResource>;

  delete(id: string): Promise<number>;
}

export interface IImplementationGuideService {
  findAll(): Promise<IFindImplementationGuide[]>;

  create(data: IImplementationGuide): Promise<IImplementationGuide>;

  findOne(data: IFindImplementationGuide): Promise<IFindImplementationGuide | undefined>;

  attachFhirResource(fhirResourceId: string, implementationGuideId: string): Promise<any>;

  detachFRFromIG(fr_id: string, ig_id: string): Promise<any>;

  update(id: string, data: IImplementationGuide): Promise<IImplementationGuide>;

  delete(id: string): Promise<number>;
}
