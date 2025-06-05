'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectSennova extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectSennova.init({
    idProjectSennova: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    fkIdAdvice: DataTypes.TINYINT,
    fkIdLineSennova: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'projectSennova',
  });
  return projectSennova;
};