import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.communications).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.communications, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.communications}_id` });
                tableBuilder.uuid('codeable_concept_id').comment('language');
                tableBuilder.boolean('preferred');
                tableBuilder.timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('codeable_concept_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`)
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.communications);
}
