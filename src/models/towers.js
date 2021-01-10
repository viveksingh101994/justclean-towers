const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const offices = require('./offices');
const towers = sequelize.define(
  'towers',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_floors: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: true }
);

offices.belongsTo(towers);
module.exports = towers;
