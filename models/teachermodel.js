const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/config');
const Class = require('./classmodel');
const Section = require('./sectionmodel');
const Subject = require('./subjectmodel'); 

const Teacher = sequelize.define('Teacher', {
  TeacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  ClassId: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: Class,
      key: 'ClassId'
    },
  },
  
  SectionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Section,
      key: 'SectionId'
    },
  },
 
  SubjectId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    references: {
      model: Subject, 
      key: 'SubjectId'
    },
  },
  Name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  JoiningDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false,
  },
  MobileNo: {
    type: DataTypes.STRING(15),
    allowNull: false,
  }
}, {
  tableName: 'Teachers',
  timestamps: true
});

// --- DIRECT CHILD JOINS (BELONGS TO & HAS MANY ASSOCIATIONS) ---
Teacher.belongsTo(Class, { foreignKey: 'ClassId' });
Class.hasMany(Teacher, { foreignKey: 'ClassId' });

Teacher.belongsTo(Section, { foreignKey: 'SectionId' });
Section.hasMany(Teacher, { foreignKey: 'SectionId' });

Teacher.belongsTo(Subject, { foreignKey: 'SubjectId' });
Subject.hasMany(Teacher, { foreignKey: 'SubjectId' });


Teacher.sync();
module.exports = Teacher;