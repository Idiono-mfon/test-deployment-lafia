import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.practitioners_identifiers).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(
                Table.practitioners_identifiers,
                (tableBuilder: Knex.CreateTableBuilder) => {
                  tableBuilder
                    .uuid('id')
                    .unique()
                    .notNullable()
                    .defaultTo(knex.raw('gen_random_uuid()'))
                    .primary({ constraintName: `${Table.practitioners_identifiers}_id` });
                  tableBuilder.uuid('practitioner_id');
                  tableBuilder.uuid('identifier_id').unique();
                  tableBuilder.timestamps(true, true);

                  // Set foreign key
                  tableBuilder
                    .foreign('practitioner_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.practitioners}`)
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
    .dropTableIfExists(Table.practitioners_identifiers);
}
