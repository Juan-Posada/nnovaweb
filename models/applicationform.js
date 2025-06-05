'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applicationForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  applicationForm.init({
    idApplicationForm: DataTypes.INTEGER,
    userType: DataTypes.CHAR,
    name: DataTypes.CHAR,
    identificationType: DataTypes.TINYINT,
    email: DataTypes.CHAR,
    phone: DataTypes.CHAR,
    companyName: DataTypes.CHAR,
    description: DataTypes.TEXT,
    fkIdFormType: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'applicationForm',
  });
  return applicationForm;
};