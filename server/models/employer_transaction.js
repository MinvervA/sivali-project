"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employer_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ employer, service_pack }) {
      // define association here
      this.belongsTo(employer, {foreignKey: "employer_id"});
      this.belongsTo(service_pack, { foreignKey: "service_pack_id" });
    }
  }
  employer_transaction.init(
    {
      description: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
      date_purchased: DataTypes.STRING,
      date_expired: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employer_transaction",
    }
  );
  return employer_transaction;
};
