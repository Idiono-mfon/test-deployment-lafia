import { injectable } from 'inversify';
import { ICodeSystem } from '../../../app/models';
import { TestBaseRepository } from './baseRepository';

const cs: ICodeSystem[] = [
  {
    code: '1',
    display: 'CodeSystem 1',
    system: 'https://example.org/codesystems/1',
    type: 'relationship'
  },
  {
    code: '2',
    display: 'CodeSystem 2',
    system: 'https://example.org/codesystems/2',
    type: 'relationship'
  },
  {
    code: '2',
    display: 'CodeSystem 3',
    system: 'https://example.org/codesystems/3',
    type: 'language',
  },
  {
    code: '2',
    display: 'CodeSystem 4',
    system: 'https://example.org/codesystems/4',
    type: 'marital_status',
  },
];

@injectable()
export class TestCodeSystemRepository extends TestBaseRepository {
  constructor() {
    super(cs);
  }
}
