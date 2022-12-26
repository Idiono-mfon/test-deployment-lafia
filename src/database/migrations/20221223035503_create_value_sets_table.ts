import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';
// import { ValueSetStatus } from '../../app/models/valueSets';

export enum ValueSetStatus {
  draft = 'draft',
  active = 'active',
  retired = 'retired',
  unknown = 'unknown',
}
// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.value_sets).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.value_sets, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.value_sets}_id` });
                tableBuilder.string('resource_type').defaultTo('ValueSet');
                tableBuilder.string('resource_id').unique().notNullable();
                tableBuilder.string('name').unique().notNullable();
                tableBuilder.string('title').notNullable();
                tableBuilder.boolean('experimental').defaultTo(false);
                tableBuilder.string('publisher').notNullable().defaultTo('');
                tableBuilder.string('description').notNullable().defaultTo('');
                tableBuilder.string('copyright').notNullable().defaultTo('');

                tableBuilder
                  .enum('status', [
                    ValueSetStatus.active,
                    ValueSetStatus.draft,
                    ValueSetStatus.draft,
                    ValueSetStatus.retired,
                    ValueSetStatus.unknown,
                  ])
                  .notNullable();
                tableBuilder.dateTime('last_changed').notNullable();
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.value_sets);
}
