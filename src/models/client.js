const knex = require('../../service/singleton');

const TABLE = 'clients';

class Client {

    static getClients = async () => {
        return await knex(TABLE).select('*');
    }

    static getClient = async (id) => {
        return await knex(TABLE)
            .select('*')
            .where('id', id)
            .first();
    }

    static createClient = async (params) => {
        return await knex(TABLE)
            .insert(params);
    }

    static updateClient = async (id, params) => {
        return await knex(TABLE)
            .where('id', id)
            .update(params);
    }

    static deleteClient = async (id) => {
        return await knex(TABLE)
            .where('id', id)
            .delete();
    }

}

module.exports = Client;