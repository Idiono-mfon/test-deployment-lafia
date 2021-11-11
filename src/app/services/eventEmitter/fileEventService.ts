import { EventEmitter } from 'events';

class FileEventService extends EventEmitter {}

export const fileEventService = new FileEventService();

export enum fileEvent {
  removeLocalFile = 'removeLocalFile',
  error = 'error'
}
