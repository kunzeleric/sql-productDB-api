const knex = require('../../service/singleton');

const TABLE = 'sales';

class Sale {

    static getSales = async () => {
        return await knex(TABLE).select('*');
    }

    static getSale = async (id) => {
        return await knex(TABLE)
            .select('*')
            .where('id', id)
            .first();
    }

    static createSale = async (params) => {
        return await knex(TABLE)
            .insert(params);
    }

    static updateSale = async (id, params) => {
        return await knex(TABLE)
            .where('id', id)
            .update(params);
    }

    static deleteSale = async (id) => {
        return await knex(TABLE)
            .where('id', id)
            .delete();
    }

    static getSaleByClientID = async (clientId) => {
        return await knex(TABLE)
            .select('*')
            .where('client_id', clientId);
    }

    static getSalesSummary = async () => {
        const salesSummary = await knex('sales')
            .select(
                'sales.id as sales_id',
                'products.name as product_name',
                'orders.id as orders_id',
                knex.raw('SUM(products.value * orders.volume_sold) AS total_value')
            )
            .leftJoin('orders', 'sales.id', 'orders.sales_id')
            .leftJoin('products', 'orders.product_id', 'products.id')
            .groupBy('sales.id', 'orders.id', 'products.name');

        return salesSummary;
    };

}

module.exports = Sale;