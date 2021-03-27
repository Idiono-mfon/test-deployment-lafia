import knex from 'knex';
import { Env } from './env';

const env = Env.all().environment;
const config = require('../../../knexfile')[env];

const db = knex(config);

export class PostgresConnection {
  static getDb() {
    return db;
  }
}
