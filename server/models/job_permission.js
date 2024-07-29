"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ job }) {
      // define association here
      this.belongsTo(job, { foreignKey: "job_id" });
    }
  }
  job_permission.init(
    {
      full_name: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "job_permission",
    }
  );
  return job_permission;
};
