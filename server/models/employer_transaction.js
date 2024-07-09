'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employer_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employer_transaction.init({
    description: DataTypes.STRING,
    isActie: DataTypes.BOOLEAN,
    date_purchased: DataTypes.STRING,
    date_expired: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employer_transaction',
  });
  return employer_transaction;
};