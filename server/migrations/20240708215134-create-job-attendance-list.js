'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job_attendance_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      shift_in: {
        type: Sequelize.STRING
      },
      shift_out: {
        type: Sequelize.STRING
      },
      check_in: {
        type: Sequelize.STRING
      },
      check_out: {
        type: Sequelize.STRING
      },
      job_name: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.STRING
      },
      location_in: {
        type: Sequelize.STRING
      },
      location_out: {
        type: Sequelize.STRING
      },
      photo_in: {
        type: Sequelize.STRING
      },
      photo_out: {
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
    await queryInterface.dropTable('job_attendance_lists');
  }
};