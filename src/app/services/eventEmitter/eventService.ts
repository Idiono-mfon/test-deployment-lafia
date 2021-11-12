import { EventEmitter } from 'events';

class EventService extends EventEmitter {}

export const eventService = new EventService();

export enum eventName {
  newEncounter = 'newEncounter',
  removeLocalFile = 'removeLocalFile',
  sendNotification = 'sendNotification',
  newMedia = 'newMedia',
  newPatient = 'newPatient',
  newPractitioner = 'newPractitioner',
  error = 'error'
}
