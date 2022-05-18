import { Env } from '../../config/env';

const {
    firebase_client_email: clientEmail,
    firebase_private_key: privateKey,
    firebase_project_id: projectId,
} = Env.all();

export const serviceAccount = { projectId, privateKey, clientEmail };
