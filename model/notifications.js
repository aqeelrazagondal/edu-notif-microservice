'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Notification = sequelize.define('notifications', {

    msgString: {
        type: DataTypes.STRING
    },
    read: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING
    },
    fromUser: {
        type: DataTypes.INTEGER
    },
    toUser: {
        type: DataTypes.INTEGER
    },
    dataId: {
        type: DataTypes.INTEGER
    },
    jobId: {
        type: DataTypes.INTEGER
    },
    serviceId: {
        type: DataTypes.INTEGER
    },
    trainingId: {
        type: DataTypes.INTEGER
    },
    interviewId: {
        type: DataTypes.INTEGER
    },
    fromRole: {
        type: DataTypes.STRING
    }
},
    {
        tableName: "notifications"
    });


console.log("Notification Table", Notification === sequelize.models.notifications);
module.exports = Notification;