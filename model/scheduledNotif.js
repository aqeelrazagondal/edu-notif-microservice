'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const ScheduledNotif = sequelize.define('edu_scheduled_notif', {
    // id:{
    //   type:DataTypes.INTEGER,
    //   autoIncrement:true,
    //   primaryKey:true
    // },

    notifString: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('notifString')
        },
        set(value) {
            this.setDataValue('notifString', value);
        }
    },
    type: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('type')
        },
        set(value) {
            this.setDataValue('type', value);
        }
    },
    status: {
        type: DataTypes.TINYINT,
        get() {
            return this.getDataValue('status')
        },
        set(value) {
            this.setDataValue('status', value);
        }
    }
},
    {
        tableName: "edu_scheduled_notif"
    });


console.log("ScheduledNotif Table", ScheduledNotif === sequelize.models.edu_scheduled_notif);
module.exports = ScheduledNotif;