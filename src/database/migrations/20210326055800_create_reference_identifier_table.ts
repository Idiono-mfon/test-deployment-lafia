import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.identifiers_references).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(
                Table.identifiers_references,
                (tableBuilder: Knex.CreateTableBuilder) => {
                  tableBuilder
                    .uuid('id')
                    .unique()
                    .notNullable()
                    .defaultTo(knex.raw('gen_random_uuid()'))
                    .primary({ constraintName: `${Table.identifiers_references}_id` });
                  tableBuilder.uuid('reference_id');
                  tableBuilder.uuid('identifier_id');
                  tableBuilder.timestamps(true, true);

                  // Set foreign key
                  tableBuilder
                    .foreign('reference_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.references}`)
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                  tableBuilder
                    .foreign('identifier_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.identifiers}`)
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                }
              );
          }
        })
      )
      .catch((e) => console.error('MIGRATION_ERROR', e))
  );
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .dropTableIfExists(Table.identifiers_references);
}
