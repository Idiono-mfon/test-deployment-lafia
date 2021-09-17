import { IFhirResource } from '../../../app/models';
import { Slug } from '../../../app/utils/slug';
import {
  allergyIntoleranceBundle,
  carePlanBundle,
  careTeamBundle,
  claimBundle,
  conditionBundle,
  coverageBundle,
  deviceBundle,
  diagnosticReportBundle,
  documentReferenceBundle,
  encounterBundle,
  endpointBundle,
  explanationOfBenefitBundle,
  goalBundle,
  healthcareServiceBundle,
  immunizationBundle,
  insurancePlanBundle,
  listBundle,
  locationBundle,
  medicationBundle,
  medicationDispenseBundle,
  medicationKnowledgeBundle,
  medicationRequestBundle,
  observationBundle,
  organizationAffiliationBundle,
  organizationBundle,
  patientBundle,
  practitionerBundle,
  practitionerRoleBundle,
  procedureBundle,
  provenanceBundle
} from '../fhirSampleBundles';
import { getListOfImplementationsGuides } from '../implementationGuides';

export const fhirResource: IFhirResource[] = [
  {
    id: 'b9699baf-5067-49ab-a99e-7da092213023',
    name: 'AllergyIntolerance',
    slug: Slug.format('AllergyIntolerance'),
    examples: allergyIntoleranceBundle,
  },
  {
    id: '19b0b92e-81e1-4b5a-b9c4-65dda7de86a2',
    name: 'CarePlan',
    slug: Slug.format('CarePlan'),
    examples: carePlanBundle,
  },
  {
    id: '0a6dd45e-40df-42f3-aad7-f1b016034d2c',
    name: 'CareTeam',
    slug: Slug.format('CareTeam'),
    examples: careTeamBundle,
  },
  {
    id: '782c8f76-bf7b-4de3-9942-e16b1e75b731',
    name: 'Claim',
    slug: Slug.format('Claim'),
    examples: claimBundle,
  },
  {
    id: '6d7ac427-c8f0-4661-a256-b24cfc876cc5',
    name: 'Condition',
    slug: Slug.format('Condition'),
    examples: conditionBundle,
  },
  {
    id: 'bf612c6e-5729-4c9f-a5ec-95228a9eeb04',
    name: 'Coverage',
    slug: Slug.format('Coverage'),
    examples: coverageBundle,
  },
  {
    id: '6cb81cfc-d1ea-41b6-9b30-5f6542be96cc',
    name: 'Device',
    slug: Slug.format('Device'),
    examples: deviceBundle,
  },
  {
    id: '28b8f923-2096-483c-97e9-d170c0bf5c1c',
    name: 'DiagnosticReport',
    slug: Slug.format('DiagnosticReport'),
    examples: diagnosticReportBundle,
  },
  {
    id: 'b6ac5e27-7a12-4b83-995d-0a09347fcdc7',
    name: 'DocumentReference',
    slug: Slug.format('DocumentReference'),
    examples: documentReferenceBundle,
  },
  {
    id: '99601066-6c78-4421-8ac6-9bdbb4b245cf',
    name: 'Encounter',
    slug: Slug.format('Encounter'),
    examples: encounterBundle,
  },
  {
    id: 'c382c99f-24bb-4560-b029-fa348e6863c5',
    name: 'Endpoint',
    slug: Slug.format('Endpoint'),
    examples: endpointBundle,
  },
  {
    id: '61fd0e4c-d30f-40b0-9883-ce67bf4e5f8d',
    name: 'ExplanationOfBenefit',
    slug: Slug.format('ExplanationOfBenefit'),
    examples: explanationOfBenefitBundle,
  },
  {
    id: 'd14552f4-4cc4-4eb4-ae6d-12578ea939f3',
    name: 'Goal',
    slug: Slug.format('Goal'),
    examples: goalBundle,
  },
  {
    id: '6ca78221-4112-4254-9075-65c9ab3ce361',
    name: 'HealthcareService',
    slug: Slug.format('HealthcareService'),
    examples: healthcareServiceBundle,
  },
  {
    id: '391b1521-7234-48d1-bf2b-b0fef8a504be',
    name: 'Immunization',
    slug: Slug.format('Immunization'),
    examples: immunizationBundle,
  },
  {
    id: 'c1b8f282-966d-45b1-ae06-fbd36eb1ec94',
    name: 'InsurancePlan',
    slug: Slug.format('InsurancePlan'),
    examples: insurancePlanBundle,
  },
  {
    id: 'c15550a1-e476-48bc-ab13-0720960e5edd',
    name: 'List',
    slug: Slug.format('List'),
    examples: listBundle,
  },
  {
    id: '55b7fc53-6550-461a-bd7a-e5fed9536a89',
    name: 'Location',
    slug: Slug.format('Location'),
    examples: locationBundle,
  },
  {
    id: 'aa797ca6-1496-4541-95e4-4d3684317c4d',
    name: 'Medication',
    slug: Slug.format('Medication'),
    examples: medicationBundle,
  },
  {
    id: '22d5effa-2593-4693-9fd2-46865bca0fbb',
    name: 'MedicationDispense',
    slug: Slug.format('MedicationDispense'),
    examples: medicationDispenseBundle,
  },
  {
    id: '60fff1aa-b843-403c-82d4-638e887eaea9',
    name: 'MedicationKnowledge',
    slug: Slug.format('MedicationKnowledge'),
    examples: medicationKnowledgeBundle,
  },
  {
    id: '589bfeeb-8918-4572-beae-142c17fed6c3',
    name: 'MedicationRequest',
    slug: Slug.format('MedicationRequest'),
    examples: medicationRequestBundle,
  },
  {
    id: '75c02fcb-1090-43e2-b5e5-85fdb2fdc16a',
    name: 'Observation',
    slug: Slug.format('Observation'),
    examples: observationBundle,
  },
  {
    id: '0a6ccacd-aae8-4266-ab8a-547879de396d',
    name: 'Organization',
    slug: Slug.format('Organization'),
    examples: organizationBundle,
  },
  {
    id: 'b3cbf4df-96be-49d6-8866-df88f5298cf0',
    name: 'OrganizationAffiliation',
    slug: Slug.format('OrganizationAffiliation'),
    examples: organizationAffiliationBundle,
  },
  {
    id: '12ad7a03-aec3-4e8a-9241-6d64d62238d2',
    name: 'Patient',
    slug: Slug.format('Patient'),
    examples: patientBundle,
  },
  {
    id: '746da437-825e-4bc4-92bf-c3c65b12df2c',
    name: 'Practitioner',
    slug: Slug.format('Practitioner'),
    examples: practitionerBundle,
  },
  {
    id: 'f41b774a-4ab2-4eea-b7da-a5c6e9e135a2',
    name: 'PractitionerRole',
    slug: Slug.format('PractitionerRole'),
    examples: practitionerRoleBundle,
  },
  {
    id: '560ba02c-0465-44d2-9867-40f176c54e4a',
    name: 'Procedure',
    slug: Slug.format('Procedure'),
    examples: procedureBundle,
  },
  {
    id: '48ab631d-fdac-42f2-b872-365b2a5b9853',
    name: 'Provenance',
    slug: Slug.format('Provenance'),
    examples: provenanceBundle,
  },
];

export const igFhir = [
  {
    fr_id: '19b0b92e-81e1-4b5a-b9c4-65dda7de86a2',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '19b0b92e-81e1-4b5a-b9c4-65dda7de86a2',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: 'b9699baf-5067-49ab-a99e-7da092213023',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'b9699baf-5067-49ab-a99e-7da092213023',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '0a6dd45e-40df-42f3-aad7-f1b016034d2c',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '0a6dd45e-40df-42f3-aad7-f1b016034d2c',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '782c8f76-bf7b-4de3-9942-e16b1e75b731',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '782c8f76-bf7b-4de3-9942-e16b1e75b731',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: '782c8f76-bf7b-4de3-9942-e16b1e75b731',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '6d7ac427-c8f0-4661-a256-b24cfc876cc5',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '6d7ac427-c8f0-4661-a256-b24cfc876cc5',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: 'bf612c6e-5729-4c9f-a5ec-95228a9eeb04',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'bf612c6e-5729-4c9f-a5ec-95228a9eeb04',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: '6cb81cfc-d1ea-41b6-9b30-5f6542be96cc',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '6cb81cfc-d1ea-41b6-9b30-5f6542be96cc',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '28b8f923-2096-483c-97e9-d170c0bf5c1c',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '28b8f923-2096-483c-97e9-d170c0bf5c1c',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: 'b6ac5e27-7a12-4b83-995d-0a09347fcdc7',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'b6ac5e27-7a12-4b83-995d-0a09347fcdc7',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '99601066-6c78-4421-8ac6-9bdbb4b245cf',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '99601066-6c78-4421-8ac6-9bdbb4b245cf',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: 'c382c99f-24bb-4560-b029-fa348e6863c5',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: '61fd0e4c-d30f-40b0-9883-ce67bf4e5f8d',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: 'd14552f4-4cc4-4eb4-ae6d-12578ea939f3',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'd14552f4-4cc4-4eb4-ae6d-12578ea939f3',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '6ca78221-4112-4254-9075-65c9ab3ce361',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: '391b1521-7234-48d1-bf2b-b0fef8a504be',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '391b1521-7234-48d1-bf2b-b0fef8a504be',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: 'c1b8f282-966d-45b1-ae06-fbd36eb1ec94',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: 'c15550a1-e476-48bc-ab13-0720960e5edd',
    ig_id: '1a608365-d8c8-41f5-8389-a2165511e209',
  },
  {
    fr_id: 'c15550a1-e476-48bc-ab13-0720960e5edd',
    ig_id: '97ae34d5-34d5-4e4d-9273-2ad21b5603bd',
  },
  {
    fr_id: '55b7fc53-6550-461a-bd7a-e5fed9536a89',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '55b7fc53-6550-461a-bd7a-e5fed9536a89',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '55b7fc53-6550-461a-bd7a-e5fed9536a89',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: 'aa797ca6-1496-4541-95e4-4d3684317c4d',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'aa797ca6-1496-4541-95e4-4d3684317c4d',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '22d5effa-2593-4693-9fd2-46865bca0fbb',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '60fff1aa-b843-403c-82d4-638e887eaea9',
    ig_id: '1a608365-d8c8-41f5-8389-a2165511e209',
  },
  {
    fr_id: '60fff1aa-b843-403c-82d4-638e887eaea9',
    ig_id: '97ae34d5-34d5-4e4d-9273-2ad21b5603bd',
  },
  {
    fr_id: '589bfeeb-8918-4572-beae-142c17fed6c3',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '589bfeeb-8918-4572-beae-142c17fed6c3',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '75c02fcb-1090-43e2-b5e5-85fdb2fdc16a',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '75c02fcb-1090-43e2-b5e5-85fdb2fdc16a',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '0a6ccacd-aae8-4266-ab8a-547879de396d',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '0a6ccacd-aae8-4266-ab8a-547879de396d',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: '0a6ccacd-aae8-4266-ab8a-547879de396d',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '0a6ccacd-aae8-4266-ab8a-547879de396d',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: 'b3cbf4df-96be-49d6-8866-df88f5298cf0',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: '12ad7a03-aec3-4e8a-9241-6d64d62238d2',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '12ad7a03-aec3-4e8a-9241-6d64d62238d2',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: '12ad7a03-aec3-4e8a-9241-6d64d62238d2',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '746da437-825e-4bc4-92bf-c3c65b12df2c',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '746da437-825e-4bc4-92bf-c3c65b12df2c',
    ig_id: '7e00a9c4-b744-4621-9309-fe2cefed469c',
  },
  {
    fr_id: '746da437-825e-4bc4-92bf-c3c65b12df2c',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '746da437-825e-4bc4-92bf-c3c65b12df2c',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: 'f41b774a-4ab2-4eea-b7da-a5c6e9e135a2',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: 'f41b774a-4ab2-4eea-b7da-a5c6e9e135a2',
    ig_id: 'cb24e8ba-abb8-4106-bea2-db72281c8743',
  },
  {
    fr_id: '560ba02c-0465-44d2-9867-40f176c54e4a',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '560ba02c-0465-44d2-9867-40f176c54e4a',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
  {
    fr_id: '48ab631d-fdac-42f2-b872-365b2a5b9853',
    ig_id: '1bb397be-cc2f-429b-b388-9c7442848eac',
  },
  {
    fr_id: '48ab631d-fdac-42f2-b872-365b2a5b9853',
    ig_id: 'ce96c2e1-a983-4b0d-a539-73af9c47fca6',
  },
];
