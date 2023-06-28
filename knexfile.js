const development = require('./config/databaseConfig');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development,

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'Ku@151511',
      database: 'backend_project_products'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'Ku@151511',
      database: 'backend_project_products'
    }
  }
};
