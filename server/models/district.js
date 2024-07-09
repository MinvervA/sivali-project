'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(village, city) {
      // define association here
      this.hasMany(village, {foreignKey: "district_id"})
      this.belongsToMany(city, {foreignKey: "city_id"})
    }
  }
  district.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'district',
  });
  return district;
};