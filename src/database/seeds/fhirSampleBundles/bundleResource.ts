import { v4 as uuid } from 'uuid';

export const bundleResource = (resourceType: string, resourceData: any[]) => {
  return {
    resourceType: 'Bundle',
    id: uuid(),
    meta: {
      lastUpdated: new Date(),
    },
    type: 'searchset',
    total: resourceData?.length,
    link: [
      {
        relation: 'self',
        url: `https://api.lafia.io/fhir/${resourceType}`
      }
    ],
    entry: resourceData
  }
}
