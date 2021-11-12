import firebase, { messaging } from 'firebase-admin';
import { Messaging } from 'firebase-admin/messaging';
import { Env } from '../../config/env';
import { logger } from '../../utils';
import { firebaseEvent, firebaseEventService } from '../eventEmitter';
import { serviceAccount } from './firebaseServiceAccount';
import MessagingDevicesResponse = messaging.MessagingDevicesResponse;

const env = Env.all();

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: env.firebase_database_url
});

export class FirebaseService {

  public static async sendNotification(firebaseToken: string, notificationPayload: NotificationPayload): Promise<MessagingDevicesResponse> {
    logger.info('Running FirebaseService.sendNotification');

    const { title, body, user_image, user_name, type } = notificationPayload;

    const payload = {
      notification: {
        title: title || 'Incoming Call',
        body: body || 'TeleHealth Call',
        sound: 'default'
      },
      data: {
        user_name,
        user_image: user_image || 'https://i.pravatar.cc/500',
        type: type || 'video',
      }
    };

    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 2, // 2 hours
      contentAvailable: true,

    }

    const notificationResponse = await firebase.messaging().sendToDevice(firebaseToken, payload, options);

    console.log('NotificationResponse', notificationResponse);

    return notificationResponse;
  }

  public static triggerNotification() {
    firebaseEventService.on(firebaseEvent.send_notification, async (deviceToken, payload) => {
      await FirebaseService.sendNotification(deviceToken, payload);
    });
  }
}

export interface NotificationPayload {
  title?: string;
  body?: string;
  user_image: string;
  user_name: string;
  type?: string;
}
