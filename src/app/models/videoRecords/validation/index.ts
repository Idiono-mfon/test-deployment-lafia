import { JSONSchema } from 'objection';

export const VideoRecordValidation: JSONSchema = {
  title: 'Video Record Validation',
  type: 'object',
  required: ['streamId'],
  properties: {
    streamId: { type: 'string' },
    patient_id: { type: 'string' },
    vodId: { type: 'string' },
    streamUrl: { type: 'string' },
  }
};
