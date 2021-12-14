'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");
const Training = require('./trainings');

const serviceProvider = sequelize.define('edu_service_provider', {
    // id:{
    //   type:DataTypes.INTEGER,
    //   autoIncrement:true,
    //   primaryKey:true
    // },
    contactName: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('contactName')
        },
        set(value) {
            this.setDataValue('contactName', value);
        }
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        get() {
            return this.getDataValue('dob')
        },
        set(value) {
            return this.setDataValue('dob', value);
        }
    },
    gender: {
        type: DataTypes.TINYINT,
        allowNull: true,
        get() {
            return this.getDataValue('gender');
        },
        set(value) {
            this.setDataValue('gender', value);
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get() {
            return this.getDataValue('userId')
        },
        set(value) {
            return this.setDataValue('userId', value);
        }
    },
    organization: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('organization')
        },
        set(value) {
            this.setDataValue('organization', value);
        }
    },
    rate: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('rate')
        },
        set(value) {
            this.setDataValue('rate', value);
        }
    },
    accountType: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('accountType')
        },
        set(value) {
            this.setDataValue('accountType', value);
        }
    },
    minorityBusiness: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('minorityBusiness')
        },
        set(value) {
            this.setDataValue('minorityBusiness', value);
        }
    }
}, {
    tableName: 'edu_service_provider',
    paranoid: true
});

//   Projects.belongsTo(Employee, {
//     foreignKey: 'employeeId'
//   })
Training.belongsTo(serviceProvider, {
    foreignKey: 'hostServiceProviderId'
})
console.log("serviceProvider Table", serviceProvider === sequelize.models.edu_service_provider);
module.exports = serviceProvider;