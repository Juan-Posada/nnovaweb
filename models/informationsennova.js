'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informationSennova extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  informationSennova.init({
    idInformationSennova: DataTypes.INTEGER,
    mission: DataTypes.TEXT,
    vision: DataTypes.TEXT,
    description: DataTypes.TEXT,
    staff: DataTypes.TEXT,
    lineSennova: DataTypes.STRING,
    ourServices: DataTypes.TEXT,
    updateDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'informationSennova',
  });
  return informationSennova;
};