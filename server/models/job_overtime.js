'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(job) {
      // define association here
      this.belongsToMany(job, {foreignKey: "job_id"})
    }
  }
  job_overtime.init({
    full_name: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job_overtime',
  });
  return job_overtime;
};