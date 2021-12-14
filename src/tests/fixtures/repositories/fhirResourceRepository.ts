import { injectable } from 'inversify';
import _ from 'lodash';
import uuid from 'uuid';
import { IFindFhirResource, IFhirResource } from '../../../app/models';

@injectable()
export class TestFhirResourceRepository {
  private fhirResourceData: IFhirResource[] = [
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
  ]

  async fetchFhirResources(): Promise<IFhirResource[]> {
    return this.fhirResourceData;
  }

  async createFhirResource(fhirResource: IFhirResource): Promise<IFhirResource> {
    fhirResource.created_at = new Date();
    fhirResource.updated_at = new Date();
    fhirResource.id = uuid.v4();

    this.fhirResourceData.push(fhirResource);

    return Promise.resolve(fhirResource);
  }

  async getOneFhirResource(data: IFindFhirResource | any): Promise<IFhirResource> {
    const fhirResource = this.fhirResourceData.filter(fhirResource => {
      let isMatch = false;
      // eslint-disable-next-line @typescript-eslint/no-for-in-array
      for (const key of Object.keys(data)) {
        // @ts-ignore
        isMatch = fhirResource[key] === data[key];
      }

      if (isMatch) {
        return fhirResource;
      }

      return null;
    });

    return Promise.resolve(fhirResource[0]);
  }

  async updateFhirResource(id: string, data: IFindFhirResource): Promise<IFhirResource> {
    const fhirResource = this.fhirResourceData.filter(fhirResource => {
      if (fhirResource.id === data.id) {
        return fhirResource;
      }

      return null;
    });

    if (fhirResource[0]) _.remove(this.fhirResourceData, fhirResource[0]);

    const updatedFhirResource = { ...fhirResource[0], ...data };

    this.fhirResourceData.push(updatedFhirResource);

    return Promise.resolve(updatedFhirResource);
  }

  async deleteFhirResource(id: string): Promise<IFhirResource> {
    const fhirResource = this.fhirResourceData.filter(fhirResource => {
      if (fhirResource.id === id) {
        return fhirResource;
      }

      return null;
    });

    if (fhirResource[0]) _.remove(this.fhirResourceData, fhirResource[0]);

    return Promise.resolve(fhirResource[0]);
  }
}
