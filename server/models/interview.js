'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  interview.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    location: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'interview',
  });
  return interview;
};