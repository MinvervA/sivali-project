'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    npwp: DataTypes.STRING,
    employee_count: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    about_us: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};