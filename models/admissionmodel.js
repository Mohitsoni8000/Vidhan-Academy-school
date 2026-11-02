const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Target models load for relational linking execution
const Class = require('./classmodel');   
const Section = require('./sectionmodel'); 

const Admission = sequelize.define('Admission', {
  AdmissionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  SurName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  FatherName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  MotherName: {
    type: DataTypes.STRING(100),
    allowNull: false, 
  },
  Gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false,
  },
  Religion: {
    type: DataTypes.ENUM('Hindu', 'Muslim', 'Christian', 'Sikh', 'Other'),
    allowNull: true,
  },
  Caste: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  SubCaste: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  ClassId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'classes', // FIX: Lowercase matches default Sequelize convention
      key: 'ClassId'
    },
  },
  SectionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'sections', // FIX: Lowercase matches default Sequelize convention
      key: 'SectionId'
    },
  }
}, {
  tableName: 'admissions', // FIX: Lowercase table name matches the missing reference error perfectly
  timestamps: true 
});

// ====================================================
// 🔗 RELATIONAL ASSOCIATIONS DEFINITION MATRIX
// ====================================================
Admission.belongsTo(Class, { foreignKey: 'ClassId' });
Class.hasMany(Admission, { foreignKey: 'ClassId' });

Admission.belongsTo(Section, { foreignKey: 'SectionId' });
Section.hasMany(Admission, { foreignKey: 'SectionId' });

Admission.sync(); // Ensure the table is created in the database
module.exports = Admission;