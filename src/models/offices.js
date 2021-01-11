const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const { towersModel } = require('./towers');
const Joi = require('joi');

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
  {
    indexes: [
      {
        unique: true,
        fields: ['towerId', 'name'],
      },
    ],
  },
  { timestamps: true }
);
towersModel.hasMany(offices);
offices.belongsTo(towersModel, { onDelete: 'CASCADE' });

const officesName = Joi.object().keys({
  name: Joi.string().required(),
});

const createOfficeSchema = Joi.object({
  offices: Joi.array().items(officesName.required()).required(),
});

module.exports = {
  officesModel: offices,
  createOfficeSchema,
};
