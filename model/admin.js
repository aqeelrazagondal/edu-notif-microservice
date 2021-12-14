'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Admin = sequelize.define('edu_admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('name')
        },
        set(value) {
            this.setDataValue('name', value);
        }
    }
}, {
    tableName: 'edu_admin'
});




console.log("Admin Table", Admin === sequelize.models.edu_admin);
module.exports = Admin;