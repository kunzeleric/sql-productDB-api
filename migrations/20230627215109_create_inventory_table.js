/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('inventory', (table) => {
    table.bigIncrements('id').primary();
    table.bigInteger('product_id').unsigned();
    table.integer('volume');

    table.foreign('product_id').references('products.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('inventory');
};
