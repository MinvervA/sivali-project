'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      job_name: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      study: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.STRING
      },
      quota: {
        type: Sequelize.STRING
      },
      minimum_qualification: {
        type: Sequelize.STRING
      },
      pic_name: {
        type: Sequelize.STRING
      },
      pic_contact: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      job_start: {
        type: Sequelize.STRING
      },
      job_end: {
        type: Sequelize.STRING
      },
      start_posting: {
        type: Sequelize.STRING
      },
      job_shift_in: {
        type: Sequelize.STRING
      },
      job_shift_out: {
        type: Sequelize.STRING
      },
      shift_quota: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('jobs');
  }
};