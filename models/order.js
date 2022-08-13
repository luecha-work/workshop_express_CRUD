'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      // define association here
    }
  }
  order.init({
    orderName: DataTypes.STRING,
    size: DataTypes.INTEGER,
    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
    modelName: 'order'
  });
  return order;
};