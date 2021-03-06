import Knex from 'knex';

export async function up(knex: Knex) : Promise<void> {
  return knex.schema.createTable('product', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('cost').notNullable();
    table.string('image').notNullable();
  });
}

export async function down(knex: Knex) : Promise<void> {
  return knex.schema.dropTable('product');
}
