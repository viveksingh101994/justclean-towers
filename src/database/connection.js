const { officesModel } = require('../models/offices');
const { towersModel } = require('../models/towers');
const { usersModel } = require('../models/users');
const sequelize = require('./db');
return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return towersModel.sync();
  })
  .then((result) => {
    console.log(`towers table created`);
    return officesModel.sync();
  })
  .then((result) => {
    console.log(`offices table created`);
    return usersModel.sync();
  })
  .then((result) => {
    console.log(`users table created`);
    return result;
  })
  .catch((error) => {
    console.error('Unable to connect to SQLite database:', error);
  });
