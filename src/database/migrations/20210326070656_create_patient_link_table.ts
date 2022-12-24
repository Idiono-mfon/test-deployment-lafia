import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.patient_links).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.patient_links, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.patient_links}_id` });
                tableBuilder.uuid('reference_id');
                tableBuilder.enum('type', ['replaced-by', 'replaces', 'refer', 'seealso']);
                tableBuilder.timestamps(true, true);

                // Setup foreign keys
                tableBuilder
                  .foreign('reference_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.references}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              });
          }
        })
      )
      .catch((e) => console.error('MIGRATION_ERROR', e))
  );
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.patient_links);
}
