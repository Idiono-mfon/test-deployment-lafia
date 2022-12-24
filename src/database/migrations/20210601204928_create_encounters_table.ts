import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.encounters).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.encounters, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.encounters}_id` });
                tableBuilder.string('resource_type').defaultTo('Patient');
                tableBuilder.uuid('narrative_id').comment('text');
                tableBuilder
                  .enum('status', [
                    'planned',
                    'arrived',
                    'triaged',
                    'in-progress',
                    'onleave',
                    'finished',
                    'cancelled +',
                  ])
                  .notNullable();
                tableBuilder.uuid('qualification_id');
                tableBuilder.timestamps(true, true);

                // Set foreign key
                // tableBuilder
                //   .foreign('practitioner_id')
                //   .references('id')
                //   .inTable(`${Schema.lafiaService}.${Table.practitioners}`);
                tableBuilder
                  .foreign('qualification_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.qualifications}`)
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.encounters);
}
