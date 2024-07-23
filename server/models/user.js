"use strict";
const { Model } = require("sequelize");
const job_overtime = require("./job_overtime");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      user_bank_information,
      user_work_history,
      user_job_offer,
      user_education,
      user_file,
      user_notification,
      user_balance_history,
      user_emergency_contact,
      user_experience,
      user_expertise,
      interview,
      job_overtime
    }) {
      // define association here
      this.hasMany(user_notification, { foreignKey: "user_id" });
      this.hasMany(user_balance_history, { foreignKey: "user_id" });
      this.hasMany(user_experience, { foreignKey: "user_id" });
      this.hasMany(user_expertise, { foreignKey: "user_id" });
      this.hasMany(interview, { foreignKey: "user_id" });
      this.hasMany(user_job_offer, { foreignKey: "user_id" });
      this.hasMany(user_work_history, { foreignKey: "user_id" });
      this.hasOne(user_bank_information, { foreignKey: "user_id" });
      this.hasOne(user_file, { foreignKey: "user_id" });
      this.hasOne(user_education, { foreignKey: "user_id" });
      this.hasOne(user_emergency_contact, { foreignKey: "user_id" });
      this.hasMany(job_overtime, {foreignKey: "user_id"});
    }
  }
  user.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
      is_verified: DataTypes.BOOLEAN,
      gender: DataTypes.STRING,
      religion: DataTypes.STRING,
      height: DataTypes.STRING,
      weight: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
      address: DataTypes.STRING,
      domicile: DataTypes.STRING,
      balance: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
