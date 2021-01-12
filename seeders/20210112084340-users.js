'use strict';
const { hashSync } = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'test',
        email: 'test01@test.com',
        password: await hashSync('test01', 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'test-02',
        email: 'test02@test.com',
        password: await hashSync('test02', 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
