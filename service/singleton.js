const knex = require('knex');
const development = require('../config/databaseConfig');

let connection;
const singleton = () =>{
    if(!connection){
        connection = knex(development);
    }
    return connection;
};

module.exports = singleton();