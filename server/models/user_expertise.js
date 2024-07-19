"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_expertise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user }) {
      // define association here
      // this.belongsTo(user, { foreignKey: "user_id" });
    }
  }
  user_expertise.init(
    {
      name: DataTypes.STRING,
      details: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_expertise",
    }
  );
  return user_expertise;
};
