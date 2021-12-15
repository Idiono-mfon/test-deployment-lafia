import { injectable } from 'inversify';
import { IFhirResource } from '../../../app/models';
import { TestBaseRepository } from './baseRepository';

const fhirResourceData: IFhirResource[] = [
  {
    id: 'bd04f4e5-043e-4f7a-b895-f7ecf50c0beb',
    name: 'Patient',
    slug: 'patient',
    examples: [
      {
        'id': '64868b6e-77aa-405d-a1bc-2c0ecb082a1c',
        'resourceType': 'Patient',
        'active': true,
        'gender': 'male',
        'birthDate': null,
        'deceasedBoolean': false,
        'deceasedDateTime': null,
        'multipleBirthBoolean': null,
        'multipleBirthInteger': null,
        'name': [
          {
            'id': '5fef0806-15d3-4d77-9216-56606bff8cf6',
            'use': 'official',
            'text': 'Joseph Amanti',
            'family': 'Amanti',
            'given': [
              'Joseph'
            ],
            'prefix': [],
            'suffix': []
          }
        ],
        'telecom': [
          {
            'id': 'd57a1737-3c81-4b77-aa20-04efa8aa824a',
            'use': 'home',
            'system': 'email',
            'value': 'josphe.amanti@gmail.com',
            'rank': '0'
          }
        ]
      }
    ],
    photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g',
    implementationGuides: [
      {
        id: 'b50adecb-fd27-4d8d-b483-c077ea24288f',
        name: 'UsScore',
        slug: 'usscore',
        photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g',
      }
    ],
    created_at: new Date('2018-02-01T00:00:00.000Z'),
    updated_at: new Date('2018-02-01T00:00:00.000Z'),
  }
];

@injectable()
export class TestFhirResourceRepository extends TestBaseRepository {
  constructor() {
    super(fhirResourceData);
  }
}
