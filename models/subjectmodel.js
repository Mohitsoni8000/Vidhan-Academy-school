const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Subject = sequelize.define('Subject', {
  SubjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(100), 
    allowNull: false,
  },
}, {
  tableName: 'Subjects', 
  timestamps: true      
});

Subject.sync();
module.exports = Subject;