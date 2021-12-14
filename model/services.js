'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Services = sequelize.define('edu_service', {
    // id:{
    //   type:DataTypes.INTEGER,
    //   autoIncrement:true,
    //   primaryKey:true
    // },
    title: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('title')
        },
        set(value) {
            this.setDataValue('title', value);
        }
    },
    datePostingOpen: {
        type: DataTypes.DATE,
        get() {
            return this.getDataValue('datePostingOpen')
        },
        set(value) {
            return this.setDataValue('datePostingOpen', value);
        }
    },
    datePostingClose: {
        type: DataTypes.DATE,
        get() {
            return this.getDataValue('datePostingClose')
        },
        set(value) {
            return this.setDataValue('datePostingClose', value);
        }
    },
    websiteUrl: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('websiteUrl')
        },
        set(value) {
            return this.setDataValue('websiteUrl', value);
        }
    },
    description: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('description')
        },
        set(value) {
            return this.setDataValue('description', value);
        }
    },
    budget: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('budget')
        },
        set(value) {
            return this.setDataValue('budget', value);
        }
    },
    employerId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('employerId')
        },
        set(value) {
            return this.setDataValue('employerId', value);
        }
    },
    statusId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('statusId')
        },
        set(value) {
            return this.setDataValue('statusId', value);
        }
    },
    contactInfo: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('contactInfo')
        },
        set(value) {
            return this.setDataValue('contactInfo', value);
        }
    },
    additionalInfo: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('additionalInfo')
        },
        set(value) {
            return this.setDataValue('additionalInfo', value);
        }
    },
    moreInfo: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('moreInfo')
        },
        set(value) {
            return this.setDataValue('moreInfo', value);
        }
    }
}, {
    tableName: 'edu_services',
    paranoid: true
});

console.log("Services Table", Services === sequelize.models.edu_service);
module.exports = Services;