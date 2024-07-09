'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_balance_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_balance_history.init({
    description: DataTypes.STRING,
    amount: DataTypes.STRING,
    starting_balance: DataTypes.STRING,
    ending_balance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee_balance_history',
  });
  return employee_balance_history;
};