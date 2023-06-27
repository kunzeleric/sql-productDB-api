/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sales', (table) => {
    table.bigIncrements('id').primary();
    table.date('date');
    table.bigInteger('client_id').unsigned();
    table.integer('income_value');

    table.foreign('client_id').references('clients.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sales');
};
