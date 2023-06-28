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

}

module.exports = Order;