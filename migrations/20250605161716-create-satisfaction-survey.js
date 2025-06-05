'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('satisfactionSurveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSatisfactionSurvey: {
        type: Sequelize.INTEGER
      },
      surveyOne: {
        type: Sequelize.TEXT
      },
      surveyTwo: {
        type: Sequelize.TEXT
      },
      surveyThree: {
        type: Sequelize.TEXT
      },
      surveyFour: {
        type: Sequelize.TEXT
      },
      surveyFive: {
        type: Sequelize.TEXT
      },
      surveySix: {
        type: Sequelize.TEXT
      },
      surveySeven: {
        type: Sequelize.TEXT
      },
      surveyEight: {
        type: Sequelize.TEXT
      },
      observation: {
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
    await queryInterface.dropTable('satisfactionSurveys');
  }
};