'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_experience.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    company_name: DataTypes.STRING,
    supervisor_name: DataTypes.STRING,
    working_period: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_experience',
  });
  return user_experience;
};