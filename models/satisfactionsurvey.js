'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class satisfactionSurvey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  satisfactionSurvey.init({
    idSatisfactionSurvey: DataTypes.INTEGER,
    surveyOne: DataTypes.TEXT,
    surveyTwo: DataTypes.TEXT,
    surveyThree: DataTypes.TEXT,
    surveyFour: DataTypes.TEXT,
    surveyFive: DataTypes.TEXT,
    surveySix: DataTypes.TEXT,
    surveySeven: DataTypes.TEXT,
    surveyEight: DataTypes.TEXT,
    observation: DataTypes.TEXT,
    fkIdFormType: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'satisfactionSurvey',
  });
  return satisfactionSurvey;
};