/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('sales_id').unsigned();
        table.bigInteger('product_id').unsigned();
        table.integer('volume_sold');

        table.foreign('sales_id').references('sales.id');
        table.foreign('product_id').references('products.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
