'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('informationSennovas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idInformationSennova: {
        type: Sequelize.INTEGER
      },
      mission: {
        type: Sequelize.TEXT
      },
      vision: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      staff: {
        type: Sequelize.TEXT
      },
      lineSennova: {
        type: Sequelize.STRING
      },
      ourServices: {
        type: Sequelize.TEXT
      },
      updateDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('informationSennovas');
  }
};