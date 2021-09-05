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
  required: ['practitioner_id'],
  properties: {
    practitioner_id: { type: 'string' },
    practitionerId: { type: 'string' }
  }
};

export const TwilioRoomValidation: JSONSchema = {
  title: 'Twilio Room Validation',
  type: 'object',
  required: ['room_sid'],
  properties: {
    room_sid: { type: 'string' },
    recording_sid: { type: 'string' }
  }
};