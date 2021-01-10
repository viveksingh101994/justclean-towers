const offices = require('../models/offices');
const towers = require('../models/towers');
const sequelize = require('./db');
return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return towers.sync();
  })
  .then((result) => {
    console.log(`towers table created`);
    return result;
  })
  .then((result) => {
    return offices.sync();
  })
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.error('Unable to connect to SQLite database:', error);
  });