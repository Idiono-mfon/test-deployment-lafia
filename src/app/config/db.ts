import knex from 'knex';
import { Env } from './env';

export class PostgresConnection {
  private static db: any;

  private static setDb() {
    const env = Env.all();
    const config = require('../../../knexfile')[env.environment];

    this.db = knex(config);
  }

  public static getDb() {

    if (!this.db) {
      this.setDb();
    }

    return this.db;
  }
}


