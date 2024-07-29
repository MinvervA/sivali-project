"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ district, province }) {
      // define association here
      this.hasMany(district, { foreignKey: "city_id" });
      this.belongsTo(province, { foreignKey: "province_id" });
    }
  }
  city.init(
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
      modelName: "city",
    }
  );
  return city;
};
