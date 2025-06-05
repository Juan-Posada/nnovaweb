'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectMonitorings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProjectMonitoring: {
        type: Sequelize.INTEGER
      },
      phase: {
        type: Sequelize.CHAR
      },
      state: {
        type: Sequelize.CHAR
      },
      decription: {
        type: Sequelize.TEXT
      },
      registrationDate: {
        type: Sequelize.DATE
      },
      fkIdUser: {
        type: Sequelize.INTEGER
      },
      fkIdLineSennova: {
        type: Sequelize.INTEGER
      },
      fkIdProjectSennova: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('projectMonitorings');
  }
};