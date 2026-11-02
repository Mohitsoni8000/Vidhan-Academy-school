const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Class = sequelize.define('Class', {
  ClassId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ClassName: {
    type: DataTypes.STRING(50), 
    allowNull: false,
  },
}, {
  tableName: 'Classes', 
  timestamps: true      
});

Class.sync();
module.exports = Class;