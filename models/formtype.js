'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class formType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  formType.init({
    idFormType: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    fkIdLineSennova: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'formType',
  });
  return formType;
};