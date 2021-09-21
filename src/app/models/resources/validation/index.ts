import { JSONSchema } from 'objection';

export const ImplementationGuideValidation: JSONSchema = {
  type: 'object',
  title: 'Implementation Guide Validation',
  required: ['name', 'slug'],
  properties: {
    name: { type: 'string' },
    slug: { type: 'string' },
    photo: { type: 'string' }
  }
}

export const FHirResourceValidation: JSONSchema = {
  type: 'object',
  title: 'FHir Resource Validation',
  required: ['name', 'slug'],
  properties: {
    name: { type: 'string' },
    slug: { type: 'string' },
    examples: { type: 'object' },
    photo: { type: 'string' }
  }
}
