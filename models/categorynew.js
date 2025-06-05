'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoryNew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categoryNew.init({
    idCategoryNew: DataTypes.INTEGER,
    name: DataTypes.CHAR,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'categoryNew',
  });
  return categoryNew;
};