"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class village extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ district }) {
      // define association here
      this.belongsTo(district, { foreignKey: "district_id" });
    }
  }
  village.init(
    {
      name: DataTypes.STRING,
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
      modelName: "village",
    }
  );
  return village;
};
