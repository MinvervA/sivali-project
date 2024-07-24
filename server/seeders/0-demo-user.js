"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "johndoe",
          email: "johndoe@gmail.com",
          phone_number: "123456790",
          password: "abc123",
          is_active: true,
          is_verified: true,
          gender: "Male",
          religion: "Christian",
          height: "180",
          weight: "75",
          profile_picture: "john_doe.png",
          address: "jl.kenangan indah no 10",
          domicile: "jakarta",
          balance: "1000000",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
