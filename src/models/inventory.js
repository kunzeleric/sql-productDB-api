const knex = require('../../service/singleton');

const TABLE = 'inventory';

class Inventory {

    static getAllInventory = async () => {
        return await knex(TABLE).select('*');
    }

    static getInventory = async (id) => {
        return await knex(TABLE)
            .select('*')
            .where('id', id)
            .first();
    }

    static createInventory = async (params) => {
        return await knex(TABLE)
            .insert(params);
    }

    static updateInventory = async (id, params) => {
        return await knex(TABLE)
            .where('id', id)
            .update(params);
    }

    static deleteInventory = async (id) => {
        return await knex(TABLE)
            .where('id', id)
            .delete();
    }

    static getInventoryByProductID = async (productId) => {
        return await knex(TABLE)
            .select('*')
            .where('product_id', productId);
    }

}

module.exports = Inventory;