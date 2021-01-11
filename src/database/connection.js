const { officesModel } = require('../models/offices');
const { towersModel } = require('../models/towers');
const sequelize = require('./db');
return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return towersModel.sync();
  })
  .then((result) => {
    console.log(`towers table created`);
    return result;
  })
  .then((result) => {
    return officesModel.sync();
  })
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.error('Unable to connect to SQLite database:', error);
  });
