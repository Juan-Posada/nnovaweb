'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class new extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  new.init({
    idNew: DataTypes.INTEGER,
    title: DataTypes.CHAR,
    description: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    picture: DataTypes.STRING,
    date: DataTypes.DATE,
    fkIdCategoryNew: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'new',
  });
  return new;
};