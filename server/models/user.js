'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    is_verified: DataTypes.BOOLEAN,
    gender: DataTypes.STRING,
    religion: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    address: DataTypes.STRING,
    domicile: DataTypes.STRING,
    balance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};