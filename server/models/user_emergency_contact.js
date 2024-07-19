"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_emergency_contact extends Model {
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
  user_emergency_contact.init(
    {
      full_name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      domicile: DataTypes.STRING,
      relationship: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_emergency_contact",
    }
  );
  return user_emergency_contact;
};
