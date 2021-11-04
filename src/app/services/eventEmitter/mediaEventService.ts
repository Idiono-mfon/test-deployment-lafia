import { EventEmitter } from 'events';

class MediaEventService extends EventEmitter {}

export const mediaEventService = new MediaEventService();

export enum mediaEvent {
  newMedia = 'newMedia',
  error = 'error'
}
