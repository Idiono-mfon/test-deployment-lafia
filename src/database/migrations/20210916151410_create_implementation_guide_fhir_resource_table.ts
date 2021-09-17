import * as Knex from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.implementation_guide_fhir_resource)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.implementation_guide_fhir_resource, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.implementation_guide_fhir_resource}_id`);
                tableBuilder
                  .uuid('ig_id')
                  .notNullable();
                tableBuilder
                  .uuid('fr_id')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('ig_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.implementation_guides}`)
                  .onUpdate('CASCADE')
                  .onDelete('CASCADE');
                tableBuilder
                  .foreign('fr_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.fhir_resources}`)
                  .onUpdate('CASCADE');
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.implementation_guide_fhir_resource);
}
