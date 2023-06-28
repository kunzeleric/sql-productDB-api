const knex = require('../../service/singleton');

const TABLE = 'orders';

class Order {

    static getOrders = async () => {
        return await knex(TABLE).select('*');
    }

    static getOrder = async (id) => {
        return await knex(TABLE)
            .select('*')
            .where('id', id)
            .first();
    }

    static createOrder = async (params) => {
        return await knex(TABLE)
            .insert(params);
    }

    static updateOrder = async (id, params) => {
        return await knex(TABLE)
            .where('id', id)
            .update(params);
    }

    static deleteOrder = async (id) => {
        return await knex(TABLE)
            .where('id', id)
            .delete();
    }

    static getOrderBySaleID = async (saleId) => {
        return await knex(TABLE)
            .select('*')
            .where('sales_id', saleId);
    }

    static getOrderByProductID = async (productId) => {
        return await knex(TABLE)
            .select('*')
            .where('product_id', productId);
    }

    static getOneOrderSummary = async (id) => {
        const order = await knex('orders')
            .select(
                'orders.id',
                'orders.volume_sold',
                'products.name',
                knex.raw('products.value * orders.volume_sold AS total_value')
            )
            .leftJoin('sales', 'orders.sales_id', 'sales.id')
            .leftJoin('products', 'orders.product_id', 'products.id')
            .where('orders.id', id)

        return order;
    }

    static getAllOrdersSummary = async () => {
        const orders = await knex('orders')
            .select(
                'orders.id',
                'orders.volume_sold',
                knex.raw('products.value * orders.volume_sold AS total_value')
            )
            .leftJoin('sales', 'orders.sales_id', 'sales.id')
            .leftJoin('products', 'orders.product_id', 'products.id')
            .groupBy('orders.id');

        return orders;
    }

}

module.exports = Order;