import { Env } from '../../config/env';

const {
  firebase_client_email: clientEmail,
  firebase_private_key: encodedPrivateKey,
  firebase_project_id: projectId,
} = Env.all();

console.log('EncodedKey:', encodedPrivateKey);

// Parse the the private key
const { privateKey } = JSON.parse(encodedPrivateKey);

export const serviceAccount = { projectId, privateKey, clientEmail };
