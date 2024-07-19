'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_job_offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_name: {
        type: Sequelize.STRING
      },
      employer: {
        type: Sequelize.STRING
      },
      date_start: {
        type: Sequelize.STRING
      },
      date_end: {
        type: Sequelize.STRING
      },
      shift_start: {
        type: Sequelize.STRING
      },
      shift_end: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_job_offers');
  }
};