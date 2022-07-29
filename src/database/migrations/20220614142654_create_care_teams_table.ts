import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.care_teams)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.care_teams, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.care_teams}_id` });
                tableBuilder
                  .string('resource_type')
                  .defaultTo('Claim');
                tableBuilder
                  .string('resource_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('status')
                  .notNullable();
                tableBuilder
                  .string('name')
                  .notNullable();
                tableBuilder
                  .string('subject')
                  .notNullable()
                  .comment('Patient/patient_id');
                tableBuilder
                  .string('encounter')
                  .notNullable()
                  .comment('Encounter/encounter_id');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.care_teams);
}

