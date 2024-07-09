'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(employer_transaction) {
      // define association here
      this.hasMany(employer_transaction, {foreignKey: "package_id"})
    }
  }
  package.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'package',
  });
  return package;
};