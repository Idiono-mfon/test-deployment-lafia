require('dotenv').config();

export interface IEnv {
  port: number;
  environment: string;
  pg_port: number;
  pg_host: string;
  pg_password: string;
  pg_user: string;
  pg_dbname: string;
  pg_test_port: number;
  pg_test_host: string;
  pg_test_password: string;
  pg_test_user: string;
  pg_test_dbname: string;
  rmq_connection: string;
  rmq_pub_queue: string;
  rmq_sub_queue: string;
  aws_access_key_id: string;
  aws_secret_access_Key: string;
  aws_region: string;
  aws_bucket: string;
  aws_cloudfront: string;
  aws_account_id: string;
  jwt_secrete_key: string;
  platform_admin_key: number;
  platform_app_namespace: string;
  redis_port: number;
  redis_host: string;
  redis_password: string;
  twilio_account_sid: string;
  twilio_api_key: string;
  twilio_api_secret: string;
  twilio_auth_token: string;
  twilio_verify_sid: string;
  email_address: string;
  email_password: string;
  fhir_server_base_url: string;
  cloudinary_url: string;
  lafia_media_url: string;
  consent_service_base_url: string;
  consent_service_auth_code: string;
  safhir_authorization_url: string;
  safhir_client_id: string;
  safhir_client_secret: string;
  safhir_callback_url: string;
  safhir_token_url: string;
  safhir_scope: string;
}

const config: IEnv = {
  port: Number(process.env.PORT),
  environment: process.env.NODE_ENV as string,
  pg_port: Number(process.env.POSTGRES_PORT),
  pg_password: process.env.POSTGRES_PASSWORD as string,
  pg_host: process.env.POSTGRES_HOST as string,
  pg_dbname: process.env.POSTGRES_DBNAME as string,
  pg_user: process.env.POSTGRES_USER as string,
  pg_test_port: Number(process.env.POSTGRES_TEST_PORT),
  pg_test_password: process.env.POSTGRES_TEST_PASSWORD as string,
  pg_test_host: process.env.POSTGRES_TEST_HOST as string,
  pg_test_dbname: process.env.POSTGRES_TEST_DBNAME as string,
  pg_test_user: process.env.POSTGRES_TEST_USER as string,
  rmq_connection: process.env.RMQ_CONNECTION as string,
  rmq_pub_queue: process.env.RMQ_PUB_QUEUE as string,
  rmq_sub_queue: process.env.RMQ_SUB_QUEUE as string,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID as string,
  aws_secret_access_Key: process.env.AWS_SECRET_ACCESS_KEY as string,
  aws_region: process.env.AWS_REGION as string,
  aws_bucket: process.env.AWS_BUCKET as string,
  aws_cloudfront: process.env.AWS_CLOUDFRONT as string,
  aws_account_id: process.env.AWS_ACCOUNT_ID as string,
  jwt_secrete_key: process.env.JWT_SECRETE_KEY as string,
  platform_admin_key: Number(process.env.PLATFORM_ADMIN_KEY),
  platform_app_namespace: process.env.PLATFORM_APP_NAMESPACE as string,
  redis_host: process.env.REDIS_HOST as string,
  redis_password: process.env.REDIS_PASSWORD as string,
  redis_port: Number(process.env.REDIS_PORT),
  twilio_account_sid: process.env.TWILIO_ACCOUNT_SID as string,
  twilio_api_key: process.env.TWILIO_API_KEY as string,
  twilio_api_secret: process.env.TWILIO_API_SECRET as string,
  twilio_auth_token: process.env.TWILIO_AUTH_TOKEN as string,
  twilio_verify_sid: process.env.TWILIO_VERIFY_SID as string,
  email_address: process.env.EMAIL_ADDRESS as string,
  email_password: process.env.EMAIL_PASSWORD as string,
  fhir_server_base_url: process.env.FHIR_SERVER_BASE_URL as string,
  cloudinary_url: process.env.CLOUDINARY_URL as string,
  lafia_media_url: process.env.LAFIA_MEDIA_URL as string,
  consent_service_base_url: process.env.CONSENT_SERVICE_BASE_URL as string,
  consent_service_auth_code: process.env.CONSENT_SERVICE_AUTH_CODE as string,
  safhir_authorization_url: process.env.SAFHIR_AUTHORIZATION_URL as string,
  safhir_scope: process.env.SAFHIR_SCOPE as string,
  safhir_client_secret: process.env.SAFHIR_CLIENT_SECRET as string,
  safhir_client_id: process.env.SAFHIR_CLIENT_ID as string,
  safhir_token_url: process.env.SAFHIR_TOKEN_URL as string,
  safhir_callback_url: process.env.SAFHIR_CALLBACK_URL as string,
};

export class Env {
  static all() {
    return config;
  }
}
