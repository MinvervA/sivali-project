"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "companies",
      [
        {
          id: 1,
          name: "PT Maju Jaya",
          country: "Indonesia",
          npwp: "123456789",
          employee_count: "20",
          address: "Jalan Melati Raya nomor 20",
          postal_code: "14045",
          email: "majujaya@gmail.com",
          web_url: "www.majujaya.com",
          about_company: "lorem",
          employer_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("companies", null, {});
  },
};
