import { injectable } from 'inversify';
import _ from 'lodash';
import uuid from 'uuid';
import { IFindImplementationGuide, IImplementationGuide } from '../../../app/models';

@injectable()
export class TestImplementationGuideRepository {
  private implementationGuideData: IImplementationGuide[] = [
    {
      id: 'b50adecb-fd27-4d8d-b483-c077ea24288f',
      name: 'UsScore',
      slug: 'usscore',
      fhirResources: [
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
        }
      ],
      photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g',
      created_at: new Date('2018-02-01T00:00:00.000Z'),
      updated_at: new Date('2018-02-01T00:00:00.000Z'),
    }
  ]

  async fetchImplementationGuides(): Promise<IImplementationGuide[]> {
    return this.implementationGuideData;
  }

  async createImplementationGuide(implementationGuide: IImplementationGuide): Promise<IImplementationGuide> {
    implementationGuide.created_at = new Date();
    implementationGuide.updated_at = new Date();
    implementationGuide.id = uuid.v4();

    this.implementationGuideData.push(implementationGuide);

    return Promise.resolve(implementationGuide);
  }

  async getOneImplementationGuide(data: IFindImplementationGuide | any): Promise<IImplementationGuide> {
    const implementationGuide = this.implementationGuideData.filter(implementationGuide => {
      let isMatch = false;
      // eslint-disable-next-line @typescript-eslint/no-for-in-array
      for (const key of Object.keys(data)) {
        // @ts-ignore
        isMatch = implementationGuide[key] === data[key];
      }

      if (isMatch) {
        return implementationGuide;
      }

      return null;
    });

    return Promise.resolve(implementationGuide[0]);
  }

  async updateImplementationGuide(id: string, data: IFindImplementationGuide): Promise<IImplementationGuide> {
    const implementationGuide = this.implementationGuideData.filter(implementationGuide => {
      if (implementationGuide.id === data.id) {
        return implementationGuide;
      }

      return null;
    });

    if (implementationGuide[0]) _.remove(this.implementationGuideData, implementationGuide[0]);

    const updatedImplementationGuide = { ...implementationGuide[0], ...data };

    this.implementationGuideData.push(updatedImplementationGuide);

    return Promise.resolve(updatedImplementationGuide);
  }

  async deleteImplementationGuide(id: string): Promise<IImplementationGuide> {
    const implementationGuide = this.implementationGuideData.filter(implementationGuide => {
      if (implementationGuide.id === id) {
        return implementationGuide;
      }

      return null;
    });

    if (implementationGuide[0]) _.remove(this.implementationGuideData, implementationGuide[0]);

    return Promise.resolve(implementationGuide[0]);
  }
}
