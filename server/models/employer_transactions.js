'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employer_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employer_transactions.init({
    description: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    date_purchased: DataTypes.STRING,
    date_expired: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employer_transactions',
  });
  return employer_transactions;
};