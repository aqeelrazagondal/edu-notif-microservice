'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");
const Jobs = require('./Jobs');
const Services = require('./services');
const Training = require('./trainings');
const ScheduledNotif = require('./scheduledNotif');

const Edu_Employer = sequelize.define('Edu_Employer', {
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('name')
        },
        set(value) {
            this.setDataValue('name', value);
        }
    },
    mission: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('mission')
        },
        set(value) {
            this.setDataValue('mission', value);
        }
    },
    goal: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('goal')
        },
        set(value) {
            this.setDataValue('goal', value);
        }
    },
    hrcontact: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('hrcontact')
        },
        set(value) {
            this.setDataValue('hrcontact', value);
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
    package: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('package')
        },
        set(value) {
            this.setDataValue('package', value);
        }
    },
    goal: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('goal')
        },
        set(value) {
            this.setDataValue('goal', value);
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
    website: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('website')
        },
        set(value) {
            this.setDataValue('website', value);
        }
    }
}, {
    tableName: 'edu_employers',
    paranoid: true


});
ScheduledNotif.belongsTo(Edu_Employer, {
    foreignKey: 'employerId'
})

Jobs.belongsTo(Edu_Employer, {
    foreignKey: 'employerId'
})

Services.belongsTo(Edu_Employer, {
    foreignKey: 'employerId'
})

Training.belongsTo(Edu_Employer, {
    foreignKey: 'hostEmployerId'
})

console.log("Edu_Employer", Edu_Employer === sequelize.models.Edu_Employer);
module.exports = Edu_Employer;