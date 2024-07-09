'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobs_attendace_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobs_attendace_list.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    shift_in: DataTypes.STRING,
    shift_out: DataTypes.STRING,
    check_in: DataTypes.STRING,
    check_out: DataTypes.STRING,
    job_name: DataTypes.STRING,
    job_description: DataTypes.STRING,
    location_in: DataTypes.STRING,
    location_out: DataTypes.STRING,
    photo_in: DataTypes.STRING,
    photo_out: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jobs_attendace_list',
  });
  return jobs_attendace_list;
};