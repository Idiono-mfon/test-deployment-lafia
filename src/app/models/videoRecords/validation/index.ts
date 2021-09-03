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

export const VideoBroadcastValidation: JSONSchema = {
  title: 'Video Broadcast Validation',
  type: 'object',
  required: ['patient_id'],
  properties: {
    patient_id: { type: 'string'  },
    description: { type: 'string' },
    initiate_care: { type: 'string' },
    video_url: { type: 'string' }
  }
};

export const PractitionerVideoBroadcastValidation: JSONSchema = {
  title: 'Practitioner Video Broadcast Validation',
  type: 'object',
  required: ['pratitioner_id'],
  properties: {
    pratitioner_id: { type: 'string' },
    pratitionerId: { type: 'string' }
  }
};