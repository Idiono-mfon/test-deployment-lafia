import { Env } from './src/app/config/env';
import { Config, Connection, KnexConfigEnvironments } from './src/app/utils';

class KnexFile {

  private static getConnection(): Connection {
    const { pg_dbname, pg_user, pg_password, pg_host, pg_port } = Env.all();

    return {
      host: pg_host,
      user: pg_user,
      password: pg_password,
      database: pg_dbname,
      port: pg_port,
      //   ssl: { // comment when running locally
      //     rejectUnauthorized: false,
      //   },
    };
  }

  private static getConfig(): Config {
    return {
      client: 'pg',
      connection: KnexFile.getConnection(),
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
  }

  public static getConfigEnvironments(): KnexConfigEnvironments {
    return {
      development: KnexFile.getConfig(),

      staging: KnexFile.getConfig(),

      production: KnexFile.getConfig(),

      test: { ...KnexFile.getConfig(), debug: true }
    };
  }
}

module.exports = KnexFile.getConfigEnvironments();
