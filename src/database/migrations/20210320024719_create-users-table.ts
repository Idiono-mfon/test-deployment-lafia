import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.users)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.users, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.users}_id` });
                tableBuilder
                  .string('first_name')
                  .notNullable();
                tableBuilder
                  .string('last_name')
                  .notNullable();
                tableBuilder
                  .string('password')
                  .notNullable();
                tableBuilder
                  .string('password_reset_token');
                tableBuilder
                  .string('gender');
                tableBuilder
                  .string('email')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('resource_type');
                tableBuilder
                  .string('resource_id')
                  .unique();
                tableBuilder
                  .string('token');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.users);
}
