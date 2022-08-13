'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    Age: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};