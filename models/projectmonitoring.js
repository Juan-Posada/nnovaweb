'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectMonitoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectMonitoring.init({
    idProjectMonitoring: DataTypes.INTEGER,
    phase: DataTypes.CHAR,
    state: DataTypes.CHAR,
    decription: DataTypes.TEXT,
    registrationDate: DataTypes.DATE,
    fkIdUser: DataTypes.TINYINT,
    fkIdLineSennova: DataTypes.TINYINT,
    fkIdProjectSennova: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'projectMonitoring',
  });
  return projectMonitoring;
};