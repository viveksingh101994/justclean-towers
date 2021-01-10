const { Sequelize } = require('sequelize');
const { NODE_ENV, DB } = require('../../config/config');
module.exports =
  NODE_ENV === 'test'
    ? new Sequelize('sqlite::memory:')
    : new Sequelize(DB.NAME, DB.USER, DB.PASS, {
        host: 'localhost',
        dialect: 'mssql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
          acquire: 30000,
        },
        dialectOptions: {
          options: { instanceName: 'SQLEXPRESS' },
        },
      });
