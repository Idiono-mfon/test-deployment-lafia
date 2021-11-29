import { EventEmitter } from 'events';

class EventService extends EventEmitter {}

export const eventService = new EventService();

eventService.setMaxListeners(0);
process.setMaxListeners(0);

export enum eventName {
  newEncounter = 'newEncounter',
  removeLocalFile = 'removeLocalFile',
  sendNotification = 'sendNotification',
  newBroadcast = 'newBroadcast',
  newMedia = 'newMedia',
  newPatient = 'newPatient',
  newPractitioner = 'newPractitioner',
  error = 'error'
}
