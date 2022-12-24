import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.qualifications).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.qualifications, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.qualifications}_id` });
                tableBuilder.uuid('codeable_concept_id').comment('code');
                tableBuilder.uuid('reference_id').comment('issuer');
                tableBuilder.uuid('period_id').comment('period');
                tableBuilder.timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('period_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.periods}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
                tableBuilder
                  .foreign('codeable_concept_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.qualifications);
}
