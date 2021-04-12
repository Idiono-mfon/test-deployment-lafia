require('dotenv').config();

interface IEnv {
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
  jwt_secrete_key: string;
  platform_admin_key: number;
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
  jwt_secrete_key: process.env.JWT_SECRETE_KEY as string,
  platform_admin_key: Number(process.env.PLATFORM_ADMIN_KEY),
};

export class Env {
  static all() {
    return config;
  }
}
