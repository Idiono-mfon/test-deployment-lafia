import { IImplementationGuide } from '../../../app/models';

export const implementationGuides: IImplementationGuide[] = [
  {
    id: '1bb397be-cc2f-429b-b388-9c7442848eac',
    name: 'Payer Data Exchange Server Capability Statement',
    slug: 'pdex',
  },
  {
    id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
    name: 'Carin Blue Button Capability Statement',
    slug: 'carin-bb',
  },
  {
    id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
    name: 'US Core Server CapabilityStatement',
    slug: 'uscore',
  },
  {
    id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
    name: 'Plan-Net Capability Statement',
    slug: 'plannet',
  },
  {
    id: '1a608365-d8c8-41f5-8389-a2165511e209',
    name: 'Secure US Drug Formulary Server Capability Statement',
    slug: 'secure-formulary',
  },
  {
    id: '97ae34d5-34d5-4e4d-9273-2ad21b5603bd',
    name: 'US Drug Formulary Server Capability Statement',
    slug: 'unsecure-formulary',
  },
];

// @ts-ignore
function getOneImplementationGuide(slug: string): IImplementationGuide {
  for (let ig of implementationGuides) {
    if (ig.slug === slug) {
      return ig;
    }
  }
}

export function getListOfImplementationsGuides(slugs: string[]): IImplementationGuide[] {
  const igs = [];

  for (const slug of slugs) {
    const ig = getOneImplementationGuide(slug);

    if (ig) {
      igs.push(ig);
    }
  }

  return igs;
}
