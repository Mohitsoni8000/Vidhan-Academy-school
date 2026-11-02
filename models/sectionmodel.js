const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Section = sequelize.define('Section', {
  SectionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(10), 
    allowNull: false,
  },
}, {
  tableName: 'Sections', 
  timestamps: true       
});

Section.sync();
module.exports = Section;