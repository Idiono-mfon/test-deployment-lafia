import { messaging } from 'firebase-admin';
import MessagingDevicesResponse = messaging.MessagingDevicesResponse;

export interface IFirebaseService {
  triggerNotification(): Promise<void>;

  sendNotification(firebaseToken: string, notificationPayload: any): Promise<MessagingDevicesResponse>;
}
