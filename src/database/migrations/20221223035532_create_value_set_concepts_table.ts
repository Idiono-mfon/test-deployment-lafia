import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.value_set_concepts).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.value_set_concepts, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.value_set_concepts}_id` });
                tableBuilder.string('code').notNullable().defaultTo('');
                tableBuilder.string('display').notNullable().defaultTo('');
                tableBuilder.string('system').defaultTo('');
                tableBuilder.string('version').defaultTo('');
                tableBuilder.uuid('value_set_id').notNullable();
                tableBuilder
                  .foreign('value_set_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.value_sets}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
                tableBuilder.timestamps(true, true);
              });
          }
        })
      )
      .catch((e) => console.error('MIGRATION_ERROR', e))
  );
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.value_set_concepts);
}
