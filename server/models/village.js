'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class village extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(district) {
      // define association here
      this.belongsToMany(district, {foreignKey: "district_id"})
    }
  }
  village.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'village',
  });
  return village;
};