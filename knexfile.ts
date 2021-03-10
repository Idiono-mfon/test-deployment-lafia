// Update with your config settings.
import { Knex } from 'knex';
import { Env } from './src/app/config';

const env = Env.all();

interface IKnexConfig {
  development: Knex.Config;
  staging: Knex.Config;
  production: Knex.Config;
  test: Knex.Config;
}

const config = {
  client: 'postgresql',
  connection: {
    host: env.pg_host,
    user: env.pg_user,
    password: env.pg_password,
    database: env.pg_dbname
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'lafia_service_migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
};

const knexConfiguration: IKnexConfig = {
  development: config,

  staging: config,

  production: config,

  test: config
};

module.exports = knexConfiguration;
