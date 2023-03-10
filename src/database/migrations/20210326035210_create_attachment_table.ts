import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.attachments)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.attachments, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.attachments}_id` });
                tableBuilder
                  .string('content_type')
                  .notNullable();
                tableBuilder
                  .string('language');
                tableBuilder
                  .binary('data');
                tableBuilder
                  .string('url');
                tableBuilder
                  .bigInteger('size');
                tableBuilder
                  .binary('hash');
                tableBuilder
                  .string('title');
                tableBuilder
                  .timestamp('creation')
                  .defaultTo(knex.fn.now());
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.attachments);
}
