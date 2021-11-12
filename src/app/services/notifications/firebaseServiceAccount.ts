import { Env } from '../../config/env';

const {
  firebase_client_x509_cert_url: client_x509_cert_url,
  firebase_client_email: client_email,
  firebase_private_key: private_key,
  firebase_private_key_id: private_key_id,
  firebase_project_id: project_id,
  firebase_type: type,
  firebase_auth_uri: auth_uri,
  firebase_token_uri: token_uri,
  firebase_auth_provider_x509_cert_url: auth_provider_x509_cert_url,
  firebase_client_id: client_id,
} = Env.all();

export const serviceAccount = {
  projectId: project_id,
  privateKey: private_key,
  clientEmail: client_email,
};
