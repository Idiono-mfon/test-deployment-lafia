import { EventEmitter } from 'events';

class EncounterEventService extends EventEmitter {}

export const encounterEventService = new EncounterEventService();

export enum encounterEvent {
  newEncounter = 'newEncounter',
  error = 'error'
}
