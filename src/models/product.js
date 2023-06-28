const knex = require('../../service/singleton');

const TABLE = 'products';

class Product {

    static getProducts = async () => {
        return await knex(TABLE).select('*');
    }

    static getProduct = async (id) => {
        return await knex(TABLE)
            .select('*')
            .where('id', id)
            .first();
    }

    static createProduct = async (params) => {
        return await knex(TABLE)
            .insert(params);
    }

    static updateProduct = async (id, params) => {
        return await knex(TABLE)
            .where('id', id)
            .update(params);
    }

    static deleteProduct = async (id) => {
        return await knex(TABLE)
            .where('id', id)
            .delete();
    }

}

module.exports = Product;