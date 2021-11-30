import firebase, { messaging } from 'firebase-admin';
import { DataMessagePayload } from 'firebase-admin/lib/messaging/messaging-api';
import { Env } from '../../config/env';
import { logger } from '../../utils';
import { eventName, eventService } from '../eventEmitter';
import { INewBroadcast, IOnlineUser } from '../signallingServers';
import { serviceAccount } from './firebaseServiceAccount';
import MessagingDevicesResponse = messaging.MessagingDevicesResponse;

const env = Env.all();

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: env.firebase_database_url
});

export class FirebaseService {

  sendNotification(firebaseToken: string, notificationPayload: CallNotificationPayload): Promise<MessagingDevicesResponse>
  sendNotification(firebaseToken: string, notificationPayload: BroadcastNotificationPayload): Promise<MessagingDevicesResponse>

  public async sendNotification(firebaseToken: string, notificationPayload: any): Promise<MessagingDevicesResponse> {
    logger.info('Running FirebaseService.sendNotification');

    let { title, body, user_image, user_name, type, notificationType, call_data, broadcast_data } = notificationPayload;
    let data: DataMessagePayload = { notificationType };

    if (notificationType === 'broadcast') {
      title = title || 'Broadcast Notification';
      body = body || 'new broadcast message';
      type = type || 'broadcast';

      broadcast_data = JSON.stringify(broadcast_data);

      data = {
        ...data,
        user_name,
        type,
        broadcast_data,
      }
    }

    if (notificationType === 'call') {
      title = title || 'Lafia TeleHealth Call';
      body = body || 'is calling...';
      type = type || 'video';

      call_data = JSON.stringify(call_data);

      data = {
        ...data,
        user_name,
        type,
        call_data,
        user_image: user_image || 'https://i.pravatar.cc/500',
      }
    }

    const payload = {
      notification: {
        title,
        body,
        sound: 'default'
      },
      data,
    };

    logger.info(`Firebase Payload: ${JSON.stringify(payload)}`);

    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 2, // 2 hours
      contentAvailable: true,

    }

    return firebase.messaging().sendToDevice(firebaseToken, payload, options);
  }

  public async triggerNotification() {
    eventService.on(eventName.sendNotification, async (deviceToken, payload) => {
      await this.sendNotification(deviceToken, payload);
    });
  }
}

export interface NotificationPayloadData {
  user_name: string;
  user_image: string;
  type: string;
  call_data?: string;
  broadcast_data?: string;
}

export interface NotificationPayload {
  title?: string;
  body?: string;
  user_name: string;
  type?: string;
  notificationType: string;
}

export interface CallNotificationPayload extends NotificationPayload {
  call_data: CallData;
  user_image: string;
}

export interface BroadcastNotificationPayload extends NotificationPayload {
  broadcast_data: BroadcastData;
}

export type BroadcastData = INewBroadcast;

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
