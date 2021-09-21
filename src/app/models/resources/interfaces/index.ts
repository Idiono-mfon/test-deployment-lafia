import { IBase } from '../../base';

export interface IImplementationGuide extends IBase  {
  name: string;
  slug: string;
  photo?: string;
  fhirResources?: IFhirResource[];
}

export interface IFhirResource extends IBase  {
  name: string;
  slug: string;
  examples?: any;
  photo?: string;
  implementationGuides?: IImplementationGuide[];
}

export interface IFindImplementationGuide extends IBase  {
  name?: string;
  slug?: string;
  fhirResources?: IFhirResource[];
}

export interface IFindFhirResource extends IBase  {
  id?: string;
  name?: string;
  slug?: string;
  examples?: any;
  implementationGuides?: IImplementationGuide[];
}

export interface IFhirResourceImplementationGuide extends IBase  {
  fr_id: string;
  ig_id: string;
}
