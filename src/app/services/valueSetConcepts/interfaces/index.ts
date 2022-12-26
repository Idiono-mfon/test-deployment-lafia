import { IValueSetConceptCreateDto, IValueSetConcept } from '../../../models';

export interface IValueSetConceptService {
  findOne(query: IValueSetConcept): Promise<IValueSetConcept>;

  findById(data: string): Promise<IValueSetConcept>;

  create(data: IValueSetConceptCreateDto): Promise<IValueSetConcept>;

  exists(query: IValueSetConcept): Promise<boolean>;
}
