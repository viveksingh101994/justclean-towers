module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('towers', [
      {
        name: 'Arcadia',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'Sun',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 0,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'SunLand',
        location: 'Delhi',
        number_of_floors: 4,
        rating: 5,
        latitude: 71.823,
        longitude: 62.0012,
      },
      {
        name: 'Unitech',
        location: 'Delhi',
        number_of_floors: 5,
        rating: 5,
        latitude: 79.823,
        longitude: 62.0012,
      },
      {
        name: 'Unitech arch',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'Unitech nw',
        location: 'Gurgaon',
        number_of_floors: 5,
        rating: 1,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'UNTdc',
        location: 'Haryana',
        number_of_floors: 5,
        rating: 1,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'Arcadia',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        latitude: 77.823,
        longitude: 66.0012,
      },
      {
        name: 'Arcadia',
        location: 'Gurgaon',
        number_of_floors: 7,
        rating: 3,
        latitude: 77.823,
        longitude: 66.0012,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towers', null, {});
  },
};
