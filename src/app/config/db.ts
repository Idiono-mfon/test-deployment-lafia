import knex from 'knex';
import { Model } from 'objection';
import { Env } from './env';

const env = Env.all().environment;
const config = require('../../../knexfile')[env];

const db = knex(config);

class PostgresConnection {
  static getDb() {
    return db;
  }
}

Model.knex(PostgresConnection.getDb());

export { Model, PostgresConnection };
