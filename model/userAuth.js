'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Tokens = sequelize.define('tokens', {
    // id:{
    //   type:DataTypes.INTEGER,
    //   autoIncrement:true,
    //   primaryKey:true
    // },

    sessionToken: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('sessionToken')
        },
        set(value) {
            this.setDataValue('sessionToken', value);
        }
    },
    tokenFB: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('tokenFB')
        },
        set(value) {
            this.setDataValue('tokenFB', value);
        }
    },
    deviceId: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('deviceId')
        },
        set(value) {
            this.setDataValue('deviceId', value);
        }
    },
    expiryTime: {
        type: DataTypes.DATE,
        get() {
            return this.getDataValue('expiryTime')
        },
        set(value) {
            this.setDataValue('expiryTime', value);
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('userId')
        },
        set(value) {
            this.setDataValue('userId', value);
        }
    },
    roleId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('roleId')
        },
        set(value) {
            this.setDataValue('roleId', value);
        }
    }
},
    {
        tableName: "user_sessions",
        paranoid: true
    });

console.log("Tokens Table", Tokens === sequelize.models.tokens);
module.exports = Tokens;