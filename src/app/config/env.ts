require('dotenv').config();

interface IEnv {
  port: number;
  environment: string;
  pg_port: string;
  pg_host: string;
  pg_password: string;
  pg_user: string;
  pg_dbname: string;
}

const config: IEnv = {
  port: Number(process.env.PORT),
  environment: process.env.NODE_ENV as string,
  pg_port: process.env.POSTGRES_PORT as string,
  pg_password: process.env.POSTGRES_PASSWORD as string,
  pg_host: process.env.POSTGRES_HOST as string,
  pg_dbname: process.env.POSTGRES_DBNAME as string,
  pg_user: process.env.POSTGRES_USER as string,
};

export class Env {
  static all() {
    return config;
  }
}
