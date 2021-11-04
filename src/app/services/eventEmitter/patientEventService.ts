import { EventEmitter } from 'events';

class PatientEventService extends EventEmitter {}

export const patientEventService = new PatientEventService();

export enum patientEvent {
  newPatient = 'newPatient',
  error = 'error'
}
