import { IBase } from '../../base';

export interface IImplementationGuide extends IBase  {
  name: string;
  slug: string;
}

export interface IFhirResource extends IBase  {
  name: string;
  slug: string;
  examples?: string;
}

export interface IFindImplementationGuide extends IBase  {
  name?: string;
  slug?: string;
}

export interface IFindFhirResource extends IBase  {
  id?: string;
  name?: string;
  slug?: string;
  examples?: string;
}

export interface IFhirResourceImplementationGuide extends IBase  {
  fr_id: string;
  ig_id: string;
}
