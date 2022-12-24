import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.address).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.address, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.address}_id` });
                tableBuilder.enum('use', ['home', 'work', 'temp', 'old', 'billing']).notNullable();
                tableBuilder.enum('type', ['postal', 'physical', 'both']).notNullable();
                tableBuilder.text('text');
                tableBuilder.text('line');
                tableBuilder.text('city');
                tableBuilder.text('district');
                tableBuilder.text('state');
                tableBuilder.text('postal_code');
                tableBuilder.text('country');
                tableBuilder.uuid('period_id').unique().comment('period');
                tableBuilder.timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('period_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.periods}`)
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.address);
}
