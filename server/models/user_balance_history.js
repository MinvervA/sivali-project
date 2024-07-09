'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_balance_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(user) {
      // define association here
      this.belongsToMany(user, {foreignKey: "user_id"})
    }
  }
  user_balance_history.init({
    description: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_balance_history',
  });
  return user_balance_history;
};