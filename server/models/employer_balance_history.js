"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employer_balance_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ employer }) {
      // define association here
      this.belongsTo(employer, { foreignKey: "employer_id" });
    }
  }
  employer_balance_history.init(
    {
      description: DataTypes.STRING,
      amount: DataTypes.STRING,
      starting_balance: DataTypes.STRING,
      ending_balance: DataTypes.STRING,
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
      modelName: "employer_balance_history",
    }
  );
  return employer_balance_history;
};
