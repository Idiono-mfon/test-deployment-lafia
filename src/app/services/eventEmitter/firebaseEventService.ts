import { EventEmitter } from 'events';

class FirebaseEventService extends EventEmitter {}

export const firebaseEventService = new FirebaseEventService();

export enum firebaseEvent {
  send_notification = 'send_notification',
  error = 'error'
}
