const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const offices = require('./offices');
const Joi = require('joi');
const towers = sequelize.define(
  'towers',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
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
    number_of_offices: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
  },
  { timestamps: true }
);

const schema = Joi.object({
  name: Joi.string().required(),

  location: Joi.string().required(),

  number_of_floors: Joi.number().required(),

  offices: Joi.array()
    .items({
      name: Joi.string().required(),
    })
    .required(),

  rating: Joi.number().integer().min(1).max(5),

  latitude: Joi.number(),

  longitude: Joi.number(),
});

offices.belongsTo(towers);
module.exports = {
  towersModel: towers,
  towersSchema: schema,
};
