const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Inquiry = sequelize.define('Inquiry', {
    InquiryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    InquiryNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CandidateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EmailAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ContactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    InquiryMessage: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Status: {
        type: DataTypes.ENUM('Pending', 'Active', 'Resolved'),
        allowNull: false,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'inquiries',   // make sure this matches your MySQL table
    timestamps: true
});

Inquiry.sync();
module.exports = Inquiry;