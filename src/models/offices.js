const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const offices = sequelize.define(
  'offices',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = offices;
