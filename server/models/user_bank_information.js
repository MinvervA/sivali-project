'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_bank_information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_bank_information.init({
    bank_name: DataTypes.STRING,
    account_name: DataTypes.STRING,
    account_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_bank_information',
  });
  return user_bank_information;
};