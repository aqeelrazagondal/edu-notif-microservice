'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const ProfessionalTraining = sequelize.define('edu_training', {

    topic: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('topic')
        },
        set(value) {
            this.setDataValue('topic', value);
        }
    },
    fromDate: {
        type: DataTypes.DATE,
        get() {
            return this.getDataValue('fromDate')
        },
        set(value) {
            this.setDataValue('fromDate', value);
        }
    },
    toDate: {
        type: DataTypes.DATE,
        get() {
            return this.getDataValue('toDate')
        },
        set(value) {
            this.setDataValue('toDate', value);
        }
    },
    fromTime: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('fromTime')
        },
        set(value) {
            this.setDataValue('fromTime', value);
        }
    },
    toTime: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('toTime')
        },
        set(value) {
            this.setDataValue('toTime', value);
        }
    },
    country: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('country')
        },
        set(value) {
            this.setDataValue('country', value);
        }
    },
    state: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('state')
        },
        set(value) {
            this.setDataValue('state', value);
        }
    },
    city: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('city')
        },
        set(value) {
            this.setDataValue('city', value);
        }
    },
    address: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('address')
        },
        set(value) {
            this.setDataValue('address', value);
        }
    },
    hostEmployeeId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('hostEmployeeId')
        },
        set(value) {
            this.setDataValue('hostEmployeeId', value);
        }
    },
    hostServiceProviderId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('hostServiceProviderId')
        },
        set(value) {
            this.setDataValue('hostServiceProviderId', value);
        }
    },
    hostEmployerId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('hostEmployerId')
        },
        set(value) {
            this.setDataValue('hostEmployerId', value);
        }
    },
    statusId: {
        type: DataTypes.INTEGER,
        get() {
            return this.getDataValue('statusId')
        },
        set(value) {
            this.setDataValue('statusId', value);
        }
    },
    description: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('description')
        },
        set(value) {
            this.setDataValue('description', value);
        }
    },
    url: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('url')
        },
        set(value) {
            this.setDataValue('url', value);
        }
    }
},
    {
        timestamps: false,
        tableName: 'edu_trainings'
    });


console.log("ProfessionalTraining Table", ProfessionalTraining === sequelize.models.edu_training);
module.exports = ProfessionalTraining;