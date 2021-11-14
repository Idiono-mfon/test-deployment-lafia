import firebase, { messaging } from 'firebase-admin';
import { Env } from '../../config/env';
import { logger } from '../../utils';
import { eventName, eventService } from '../eventEmitter';
import { IOnlineUser } from '../signallingServers';
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

    const { title, body, user_image, user_name, type, call_data } = notificationPayload;

    const payload = {
      notification: {
        title: title || 'Lafia TeleHealth Call',
        body: body || 'is calling...',
        sound: 'default'
      },
      data: {
        user_name,
        user_image: user_image || 'https://i.pravatar.cc/500',
        type: type || 'video',
        call_data: JSON.stringify(call_data),
      }
    };

    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 2, // 2 hours
      contentAvailable: true,

    }

    return firebase.messaging().sendToDevice(firebaseToken, payload, options);
  }

  public static triggerNotification() {
    eventService.on(eventName.sendNotification, async (deviceToken, payload) => {
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
  call_data?: CallData;
}

export interface CallData {
  room: string;
  token: string;
  sender: string;
  reciever: string;
  senderDetails: IOnlineUser;
  recieverDetails: IOnlineUser;
  type: string;
  socket: string;
}
