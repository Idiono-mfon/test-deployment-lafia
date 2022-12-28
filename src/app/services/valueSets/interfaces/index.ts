import {
  IValueSet,
  IFhirValueSet,
  IValueSetCreateDto,
  IValueSetComposeIncludeConcept,
} from '../../../models';

export interface IValueSetService {
  findOne(query: IValueSet): Promise<IValueSet>;

  findById(data: string): Promise<IValueSet>;

  create(data: IValueSetCreateDto): Promise<IValueSet>;

  findOnFhir(query: IValueSet): Promise<IFhirValueSet>;

  exists(query: string): Promise<boolean>;

  findCustomValueSetConcepts(query: IValueSet): Promise<IValueSetComposeIncludeConcept[]>;
}
