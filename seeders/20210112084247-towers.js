'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('towers', [
      {
        name: 'Arcadia',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        number_of_offices: 4,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Sun',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 0,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'SunLand',
        location: 'Delhi',
        number_of_floors: 4,
        number_of_offices: 3,
        rating: 5,
        latitude: 71.823,
        longitude: 62.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Unitech',
        location: 'Delhi',
        number_of_floors: 5,
        rating: 5,
        latitude: 79.823,
        longitude: 62.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Unitech arch',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Unitech nw',
        location: 'Gurgaon',
        number_of_floors: 5,
        rating: 1,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'UNTdc',
        location: 'Haryana',
        number_of_floors: 5,
        rating: 1,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Wave',
        location: 'Gurgaon',
        number_of_floors: 17,
        rating: 4,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Emaar',
        location: 'Dubai',
        number_of_floors: 27,
        rating: 5,
        latitude: 77.823,
        longitude: 66.0012,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    await queryInterface
      .bulkInsert('offices', [
        {
          name: 'bellurbis',
          towerId: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'solveda',
          towerId: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'suzuki',
          towerId: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'bellurbis-01',
          towerId: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'test-01',
          towerId: 3,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'test-02',
          towerId: 3,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          name: 'test-03',
          towerId: 3,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])
      .catch((err) => {
        console.log(err);
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towers', null, {});
  },
};
