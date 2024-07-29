"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_work_history extends Model {
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
  user_work_history.init(
    {
      job_name: DataTypes.STRING,
      date_start: DataTypes.STRING,
      date_end: DataTypes.STRING,
      salary: DataTypes.STRING,
      employer: DataTypes.STRING,
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
      modelName: "user_work_history",
    }
  );
  return user_work_history;
};
