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

}

module.exports = Sale;