"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_job_offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user }) {
      // define association here
      this.belongsTo(user, { foreignKey: "user_id" });
    }
  }
  user_job_offer.init(
    {
      job_name: DataTypes.STRING,
      employer: DataTypes.STRING,
      date_start: DataTypes.STRING,
      date_end: DataTypes.STRING,
      shift_start: DataTypes.STRING,
      shift_end: DataTypes.STRING,
      address: DataTypes.STRING,
      salary: DataTypes.STRING,
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
      modelName: "user_job_offer",
    }
  );
  return user_job_offer;
};
