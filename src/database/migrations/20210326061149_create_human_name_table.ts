import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.human_names).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.human_names, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.human_names}_id` });
                tableBuilder
                  .enum('use', [
                    'usual',
                    'official',
                    'temp',
                    'nickname',
                    'anonymous',
                    'old',
                    'maiden',
                  ])
                  .notNullable();
                tableBuilder.string('text');
                tableBuilder.string('family').comment('surname');
                tableBuilder
                  .json('given')
                  .defaultTo(JSON.stringify([]))
                  .comment('first name, last name, other name');
                tableBuilder.json('prefix').defaultTo([]);
                tableBuilder.json('suffix').defaultTo([]);
                tableBuilder.uuid('period_id').comment('period').unique();
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.human_names);
}
