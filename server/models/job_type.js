'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(job) {
      // define association here
      this.hasMany(job, {foreignKey: "type_id"})
    }
  }
  job_type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job_type',
  });
  return job_type;
};