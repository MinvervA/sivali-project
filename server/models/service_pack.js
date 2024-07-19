"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class service_pack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ employer_transaction }) {
      this.hasMany(employer_transaction, { foreignKey: "service_pack_id" });
    }
  }
  service_pack.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "service_pack",
    }
  );
  return service_pack;
};
