import { EventEmitter } from 'events';

class PractitionerEventService extends EventEmitter {}

export const practitionerEventService = new PractitionerEventService();

export enum practitionerEvent {
  newPractitioner = 'newPractitioner',
  error = 'error'
}
