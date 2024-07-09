'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    company_name: DataTypes.STRING,
    job_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    gender: DataTypes.STRING,
    study: DataTypes.STRING,
    experience: DataTypes.STRING,
    skill: DataTypes.STRING,
    job_description: DataTypes.STRING,
    quota: DataTypes.STRING,
    minimum_qualification: DataTypes.STRING,
    pic_name: DataTypes.STRING,
    pic_contact: DataTypes.STRING,
    salary: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    address: DataTypes.STRING,
    job_start: DataTypes.STRING,
    job_end: DataTypes.STRING,
    start_posting: DataTypes.STRING,
    job_shift_in: DataTypes.STRING,
    job_shift_out: DataTypes.STRING,
    shift_quota: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};