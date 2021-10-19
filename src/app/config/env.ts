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
  aws_access_key_id: string;
  aws_secret_access_Key: string;
  aws_region: string;
  aws_bucket: string;
  aws_cloudfront: string;
  aws_account_id: string;
  jwt_secrete_key: string;
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
  safhir_authorization_url: string;
  safhir_client_id: string;
  safhir_client_secret: string;
  safhir_callback_url: string;
  safhir_token_url: string;
  safhir_scope: string;
  safhir_base_url: string;
  kafka_connection: string;
  kafka_erpnext_producer_topic: string;
  kafka_consumer_topics: string;
}

const config: IEnv | any = {
  port: Number(process.env.PORT),
  environment: process.env.NODE_ENV,
  pg_port: Number(process.env.POSTGRES_PORT),
  pg_password: process.env.POSTGRES_PASSWORD,
  pg_host: process.env.POSTGRES_HOST,
  pg_dbname: process.env.POSTGRES_DBNAME,
  pg_user: process.env.POSTGRES_USER,
  pg_test_port: Number(process.env.POSTGRES_TEST_PORT),
  pg_test_password: process.env.POSTGRES_TEST_PASSWORD,
  pg_test_host: process.env.POSTGRES_TEST_HOST,
  pg_test_dbname: process.env.POSTGRES_TEST_DBNAME,
  pg_test_user: process.env.POSTGRES_TEST_USER,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_Key: process.env.AWS_SECRET_ACCESS_KEY,
  aws_region: process.env.AWS_REGION,
  aws_bucket: process.env.AWS_BUCKET,
  aws_cloudfront: process.env.AWS_CLOUDFRONT,
  aws_account_id: process.env.AWS_ACCOUNT_ID,
  jwt_secrete_key: process.env.JWT_SECRETE_KEY,
  redis_host: process.env.REDIS_HOST,
  redis_password: process.env.REDIS_PASSWORD,
  redis_port: Number(process.env.REDIS_PORT),
  twilio_account_sid: process.env.TWILIO_ACCOUNT_SID,
  twilio_api_key: process.env.TWILIO_API_KEY,
  twilio_api_secret: process.env.TWILIO_API_SECRET,
  twilio_auth_token: process.env.TWILIO_AUTH_TOKEN,
  twilio_verify_sid: process.env.TWILIO_VERIFY_SID,
  email_address: process.env.EMAIL_ADDRESS,
  email_password: process.env.EMAIL_PASSWORD,
  fhir_server_base_url: process.env.FHIR_SERVER_BASE_URL,
  cloudinary_url: process.env.CLOUDINARY_URL,
  lafia_media_url: process.env.LAFIA_MEDIA_URL,
  safhir_authorization_url: process.env.SAFHIR_AUTHORIZATION_URL,
  safhir_scope: process.env.SAFHIR_SCOPE,
  safhir_client_secret: process.env.SAFHIR_CLIENT_SECRET,
  safhir_client_id: process.env.SAFHIR_CLIENT_ID,
  safhir_token_url: process.env.SAFHIR_TOKEN_URL,
  safhir_callback_url: process.env.SAFHIR_CALLBACK_URL,
  safhir_base_url: process.env.SAFHIR_BASE_URL,
  kafka_consumer_topics: process.env.KAFKA_CONSUMER_TOPICS,
  kafka_erpnext_producer_topic: process.env.KAFKA_ERPNEXT_PRODUCER_TOPIC,
  kafka_connection: process.env.KAFKA_CONNECTION,
};

export class Env {
  static all() {
    return config;
  }
}
