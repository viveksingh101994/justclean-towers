const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const offices = sequelize.define(
  'offices',
  {
    name: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);

module.exports = offices;
