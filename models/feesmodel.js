const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Admission = require('./admissionmodel');

const Fees = sequelize.define('Fees', {
  FeesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  AdmissionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Admission,
      key: 'AdmissionId',
    },
  },

  Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  Amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }

}, {
  tableName: 'Fees',
  timestamps: true
});


// RELATIONSHIP
Fees.belongsTo(Admission, { foreignKey: 'AdmissionId' });
Admission.hasMany(Fees, { foreignKey: 'AdmissionId' });


// SYNC
Fees.sync();
module.exports = Fees;