"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_education extends Model {
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
  user_education.init(
    {
      last_education: DataTypes.STRING,
      school: DataTypes.STRING,
      major: DataTypes.STRING,
      year_graduate: DataTypes.STRING,
      GPA: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_education",
    }
  );
  return user_education;
};
