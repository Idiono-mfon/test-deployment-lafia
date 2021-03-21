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
};

export class Env {
  static all() {
    return config;
  }
}
