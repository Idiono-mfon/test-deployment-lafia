import { Config } from 'knex';
import { Env } from './src/app/config/env';

const {
  environment, pg_dbname,
  pg_user, pg_password, pg_host,
  pg_port, pg_test_dbname,
  pg_test_host, pg_test_password,
  pg_test_port, pg_test_user,
} = Env.all();

console.log('pg_host:', process.env.POSTGRES_HOST);
console.log('pg_host:', pg_host);
console.log('pg_port:', pg_port);

interface KnexConfig {
  [name: string]: Config;
}

interface Connection {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

let connection: Connection = {
  host: pg_host,
  user: pg_user,
  password: pg_password,
  database: pg_dbname,
  port: pg_port,
};

if (environment === 'test' || environment === 'testing') {
  connection = {
    host: pg_test_host,
    user: pg_test_user,
    password: pg_test_password,
    database: pg_test_dbname,
    port: pg_test_port,
  };
}

const config = {
  client: 'pg',
  connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './src/database/migrations',
    tableName: 'lafia_service_migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './src/database/seeds',
    extension: 'ts',
  },
};

const knexConfiguration: KnexConfig = {
  development: config,

  staging: config,

  production: config,

  test: { ...config, debug: true }
};

module.exports = knexConfiguration;
