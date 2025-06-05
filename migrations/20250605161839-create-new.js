'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('news', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNew: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.CHAR
      },
      description: {
        type: Sequelize.TEXT
      },
      summary: {
        type: Sequelize.TEXT
      },
      picture: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      fkIdCategoryNew: {
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
    await queryInterface.dropTable('news');
  }
};