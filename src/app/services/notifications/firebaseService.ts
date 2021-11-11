import { initializeApp, cert } from 'firebase-admin/app';
import { Messaging } from 'firebase-admin/messaging';
import { Env } from '../../config/env';
import { serviceAccount } from './firebaseServiceAccount';

const env = Env.all();

export class FirebaseService {
  private messaging: any;

  public constructor() {
    initializeApp({
      credential: cert(serviceAccount),
      databaseURL: env.firebase_database_url
    });

    this.messaging = Messaging;
  }

  public async sendNotification(firebaseToken: string, notificationPayload: NotificationPayload): Promise<void> {
    const { title, body, user_image, user_name, type } = notificationPayload;

    const payload = {
      notification: {
        title: title || 'Incoming Call',
        body: body || 'TeleHealth Call',
        sound: 'default'
      },
      data: {
        user_name,
        user_image,
        type: type || 'video',
      }
    };

    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 2, // 2 hours
      contentAvailable: true,

    }

    return this.messaging.sendToDevice(firebaseToken, payload, options);
  }


}

export interface NotificationPayload {
  title?: string;
  body?: string;
  user_image: string;
  user_name: string;
  type?: string;
}
