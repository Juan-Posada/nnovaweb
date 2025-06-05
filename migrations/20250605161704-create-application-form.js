'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applicationForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idApplicationForm: {
        type: Sequelize.INTEGER
      },
      userType: {
        type: Sequelize.CHAR
      },
      name: {
        type: Sequelize.CHAR
      },
      identificationType: {
        type: Sequelize.TINYINT
      },
      email: {
        type: Sequelize.CHAR
      },
      phone: {
        type: Sequelize.CHAR
      },
      companyName: {
        type: Sequelize.CHAR
      },
      description: {
        type: Sequelize.TEXT
      },
      fkIdFormType: {
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
    await queryInterface.dropTable('applicationForms');
  }
};