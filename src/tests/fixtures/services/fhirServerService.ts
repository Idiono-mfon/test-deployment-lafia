import { Method } from 'axios';
import { inject, injectable } from 'inversify';
import { isEmpty } from 'lodash';
import TYPES from '../../../app/config/types';
import { IFhirServer } from '../../../app/models';
import { FhirResourceService } from '../../../app/services';

@injectable()
export class TestFhirServerService implements IFhirServer {

  private readonly fhirResourceData = [
    {
      'resourceType': 'Patient',
      'id': '22',
      'meta': {
        'versionId': '2',
        'lastUpdated': '2021-10-11T19:52:02.842+00:00',
        'source': '#JKw3YUbaY9TqjZkI'
      },
      'text': {
        'status': 'generated',
        'div': '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Joy <b>Test </b></div><table class="hapiPropertyTable"><tbody/></table></div>'
      },
      'active': true,
      'name': [
        {
          'use': 'official',
          'text': 'Joy Test',
          'family': 'Test',
          'given': [
            'Joy'
          ]
        }
      ],
      'telecom': [
        {
          'system': 'email',
          'value': 'joy@test.com',
          'use': 'home',
          'rank': 0
        },
        {
          'system': 'phone',
          'value': '07065182394',
          'use': 'mobile',
          'rank': 0
        }
      ],
      'gender': 'female'
    },
    {
      'resourceType': 'Practitioner',
      'id': '33',
      'meta': {
        'versionId': '1',
        'lastUpdated': '2021-11-28T20:12:22.064+00:00',
        'source': '#plxaVxoPzCLTtGvJ'
      },
      'active': true,
      'name': [
        {
          'use': 'official',
          'text': 'jim test',
          'family': 'test',
          'given': [
            'jim'
          ]
        }
      ],
      'telecom': [
        {
          'system': 'email',
          'value': 'jim@test.com',
          'use': 'home',
          'rank': 0
        },
        {
          'system': 'phone',
          'value': '07065182395',
          'use': 'mobile',
          'rank': 0
        }
      ],
      'gender': 'male'
    },
  ]

  @inject(TYPES.FhirResourceService)
  private readonly fhirResourceService: FhirResourceService;

  private static chooseMethodFromConnectionName(connectionName = 'lafia'): string {
    let [part1, part2] = connectionName.toLowerCase().split('fhir');
    let others = ''

    if (part2) {
      others = part2[0].toUpperCase();
      others += part2.substring(1);
    }

    return `${part1}Fhir${others}`
  }

  private static extractYear(date: string) {
    return new Date(date).getFullYear();
  }

  private async fetchResource(fetchProps: FetchProps): Promise<any> {
    let { resourceQuery, selectMethod, fetchSampleResource, token } = fetchProps;

    let resourceData: any = {};

    if (fetchSampleResource) {
      resourceData.data = await this.fetchSampleResources(resourceQuery);
    } else {
      // @ts-ignore
      resourceData = await this[selectMethod](
        resourceQuery,
        'GET',
        { token }
      );
    }

    return resourceData.data;
  }

  private static groupResource(resourceData: any, data: AggregatedData, resourceDateField: string, resourceName: string) {
    for (let entry of resourceData?.entry) {

      const date = entry.resource ? entry.resource[resourceDateField] : entry[resourceDateField];

      const entryResource = entry?.resource ? entry.resource : entry;

      if (date) {
        const year = TestFhirServerService.extractYear(date);

        if (data.groupedEntries[year]) {
          // @ts-ignore
          data.groupedEntries[year].push({ resourceName, resourceValue: entryResource });
        } else {
          data.groupedEntries[year] = [{ resourceName, resourceValue: entryResource }];
        }
      } else {
        data.ungroupedEntries.push(entryResource);
      }
    }
  }

  private static organizeResourceByDate(data: AggregatedData) {
    const resourceByDates: IndexAccessor | any = {};

    for (let year in data.groupedEntries) {

      const resourceEntries: IndexAccessor = {}
      for (const entry of data.groupedEntries[year]) {

        if (resourceEntries[entry.resourceName]) {
          resourceEntries[entry.resourceName].push(entry.resourceValue);
        } else {
          resourceEntries[entry.resourceName] = [entry.resourceValue];
        }
      }

      if (resourceByDates[year]) {
        resourceByDates[year].push(resourceEntries);
      } else {
        resourceByDates[year] = [resourceEntries];
      }
    }

    if (!isEmpty(resourceByDates)) data.grouped = [resourceByDates];

    const grouped: any = [];
    const groupedData = data.grouped[0]
    let groupedYear: IndexAccessor = {};

    this.organizeDataInYears(groupedData, groupedYear, grouped);

    data.grouped = grouped;
  }

  public async executeQuery(resourceQuery: string, httpMethod: Method, props: FhirProperties = {}): Promise<any> {
    let { connectionName } = props!;

    connectionName = connectionName || 'lafia';

    const selectMethod = TestFhirServerService.chooseMethodFromConnectionName(connectionName);

    // @ts-ignore
    return await this[selectMethod](resourceQuery, httpMethod, props);
  }

  public async lafiaFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    const { data } = props!;

    if (httpMethod?.toLowerCase() === 'post') {
      this.fhirResourceData.push(data);

      return {
        data,
        status: 201
      }
    }

    if (httpMethod?.toLowerCase() === 'get' && resourceQuery?.toLowerCase().startsWith('/patient/22')) {
      const patient = this.fhirResourceData.find((patient: any) => {
        return patient.resourceType === 'Patient' && patient.id === '22';
      });

      return {
        data: patient,
        status: 200
      }
    }

    if (httpMethod?.toLowerCase() === 'get' && resourceQuery?.toLowerCase().startsWith('/practitioner/33')) {
      const practitioner = this.fhirResourceData.filter((practitioner: any) => {
        return practitioner.resourceType === 'Practitioner' && practitioner.id === '33';
      });


      return {
        data: practitioner,
        status: 200
      }
    }
  }

  public async saFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    return await this.lafiaFhir(resourceQuery, httpMethod, props);
  }

  public async fetchSampleResources(resourceName: string): Promise<any> {
    return this.fhirResourceData.filter((resource: any) => {
      return resource.resourceType === resourceName;
    });
  }

  public async aggregateFhirData(props: FhirProperties): Promise<any> {
    const { connectionName, token, patient_id } = props;
    const data: AggregatedData = {
      grouped: [],
      ungrouped: [],
      groupedEntries: {},
      ungroupedEntries: [],
      failed: [],
    }

    let fetchSampleResource = false;
    if (connectionName?.toLowerCase() === 'test' || connectionName?.toLocaleLowerCase() === 'sample') {
      fetchSampleResource = true;
    }

    const selectMethod = TestFhirServerService.chooseMethodFromConnectionName(connectionName!);

    const resourceDateFieldAndReference: IndexAccessor = {
      Procedure: ['performedDateTime', 'subject'],
      Condition: ['recordedDate', 'subject'],
      Observation: ['issued', 'subject'],
      DiagnosticReport: ['issued', 'subject'],
      MedicationDispense: ['whenHandedOver', 'subject'],
      Medication: ['', ''],
      Immunization: ['occurrenceDateTime', 'patient'],
      DocumentReference: ['date', 'subject'],
      AllergyIntolerance: ['recordedDate', 'patient'],
      MedicationRequest: ['authoredOn', 'subject'],
    }

    const resourceNames = [
      'Procedure', 'Condition',
      'Observation', 'DiagnosticReport',
      'MedicationDispense', 'Medication',
      'Immunization', 'DocumentReference',
      'AllergyIntolerance', 'MedicationRequest'
    ];

    for (let resourceName of resourceNames) {
      const [resourceDateField, resourceReference] = resourceDateFieldAndReference[resourceName];
      const searchParam = resourceReference ? `${resourceReference}=Patient/${patient_id}` : '';

      let resourceQuery = !connectionName || connectionName?.toLocaleLowerCase() === 'lafia' ?
        `${resourceName}?${searchParam}` : `${resourceName}`;

      const resourceData = await this.fetchResource({ resourceQuery, selectMethod, token, fetchSampleResource, data });

      if (resourceData?.entry) {
        TestFhirServerService.groupResource(resourceData, data, resourceDateField, resourceName);
      }

      if (data.ungroupedEntries.length) {
        data.ungrouped.push({ resourceName, resourceValue: data.ungroupedEntries });
        data.ungroupedEntries = [];
      }

      TestFhirServerService.organizeResourceByDate(data);
    }

    return {
      failed: data.failed,
      ungrouped: data.ungrouped,
      grouped: data.grouped || [],
    }

  }

  private static organizeDataInYears(groupedData: IndexAccessor, groupedYear: IndexAccessor, grouped: any) {
    for (let year in groupedData) {
      groupedYear[year] = [];
      for (let data of groupedData[year]) {
        for (let resourceName in data) {
          groupedYear[year].push({
            resourceName,
            resourceValue: data[resourceName]
          });
        }
      }

      grouped.push({ year, data: groupedYear[year] });
      groupedYear = {}
    }
  }
}

interface FetchProps {
  resourceQuery: string;
  selectMethod: any;
  data: AggregatedData;
  fetchSampleResource?: boolean
  token?: string;
}

export interface FhirProperties {
  data?: any,
  token?: string,
  connectionName?: string,
  ig?: string,
  patient_id?: string,
}

interface IndexAccessor {
  [key: string]: string[] | any;
}

interface AggregatedData {
  grouped: IndexAccessor[],
  ungrouped: IndexAccessor[],
  groupedEntries: IndexAccessor,
  failed: IndexAccessor[],
  ungroupedEntries: any[],
}
