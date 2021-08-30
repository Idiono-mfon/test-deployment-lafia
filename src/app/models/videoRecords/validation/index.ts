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
  required: ['streamId'],
  properties: {
    description: { type: 'string' },
    initiate_care: { type: 'string' },
    initiateCare: { type: 'string' },
    videoUrl: { type: 'string' },
    video_url: { type: 'string' }
  }
};