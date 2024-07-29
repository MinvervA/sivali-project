"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "employers",
      [
        {
          id: 1,
          name: "Taryono",
          email: "taryono@gmail.com",
          phone_number: "123456789",
          position: "HR",
          balance: "10000",
          isActive: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("employers", null, {});
  },
};
