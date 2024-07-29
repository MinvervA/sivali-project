"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ company, employer_transaction, employer_balance_history, interview }) {
      // define association here
      this.hasOne(company, { foreignKey: "employer_id" });
      this.hasMany(interview, { foreignKey: "employer_id" });
      this.hasMany(employer_balance_history, { foreignKey: "employer_id" });
      this.hasMany(employer_transaction, { foreignKey: "employer_id" });
    }
  }
  employer.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      position: DataTypes.STRING,
      balance: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
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
      modelName: "employer",
    }
  );
  return employer;
};
