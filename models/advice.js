'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Advice.init({
    idAdvice: DataTypes.INTEGER,
    date: DataTypes.DATE,
    state: DataTypes.STRING,
    description: DataTypes.TEXT,
    fkIdUser: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Advice',
  });
  return Advice;
};