import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.patients)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.patients, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.patients}_id`);
                tableBuilder
                  .string('resource_type')
                  .defaultTo('Patient');
                tableBuilder
                  .uuid('narrative_id')
                  .comment('text');
                tableBuilder
                  .boolean('active')
                  .defaultTo(true)
                  .notNullable();
                tableBuilder
                  .enum('gender', ['male', 'female', 'other', 'unknown'])
                  .notNullable();
                tableBuilder
                  .date('birth_date');
                tableBuilder
                  .boolean('deceased_boolean')
                  .defaultTo(false);
                tableBuilder
                  .dateTime('deceased_date_time');
                tableBuilder
                  .uuid('codeable_concept_id')
                  .comment('marital_status');
                tableBuilder
                  .boolean('multiple_birth_boolean');
                tableBuilder
                  .integer('multiple_birth_integer');
                tableBuilder
                  .uuid('reference_id')
                  .comment('managing_organization');
                tableBuilder
                  .timestamps(true, true);

                // Setup foreign keys
                tableBuilder
                  .foreign('reference_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.references}`);
                tableBuilder
                  .foreign('narrative_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.narratives}`);
                tableBuilder
                  .foreign('codeable_concept_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.patients);
}
