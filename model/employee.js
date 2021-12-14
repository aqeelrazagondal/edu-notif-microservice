'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");
// const Projects = require('./projectwork');
// const Expertise = require('./expertise');
// const Employments = require('./employment');
// const Certifications = require('./certifications');
// const Education = require('./education');
// const Videos = require('./video');
// const Training = require('./trainings');
// const AppliedJobs = require('./appliedJobs');
// const AppliedTrainings = require('./appliedTrainings');
// const userLanguages = require('./userLanguages');
// const FavoriteJobs = require('./favoritesJobs');
// const Interviews = require('./interviews');
// const CustomMessage = require('./customMessage');
// const Views = require('./profileViews');
const ScheduledNotif = require('./scheduledNotif');

const Employee = sequelize.define('edu_employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('title')
    },
    set(value) {
      this.setDataValue('title', value);
    }
  },
  firstName: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('firstName')
    },
    set(value) {
      this.setDataValue('firstName', value);
      this.setDataValue('displayName', value + ' ' + this.getDataValue('lastName'));
    }
  },
  lastName: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('lastName')
    },
    set(value) {
      this.setDataValue('lastName', value);
      this.setDataValue('displayName', this.getDataValue('firstName') + ' ' + value);
    }
  },
  middleName: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('middleName')
    },
    set(value) {
      this.setDataValue('middleName', value);
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
  about: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('about')
    },
    set(value) {
      this.setDataValue('about', value);
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
  pronouns: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('pronouns')
    },
    set(value) {
      this.setDataValue('pronouns', value);
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
  defaultVideo: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('defaultVideo')
    },
    set(value) {
      return this.setDataValue('defaultVideo', value);
    }
  },
  displayName: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('displayName')
    },
    set(value) {
      this.setDataValue('displayName', value);
    }
  },
  pds_future: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('pds_future')
    },
    set(value) {
      this.setDataValue('pds_future', value);
    }
  },
  resume: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('resume')
    },
    set(value) {
      this.setDataValue('resume', value);
    }
  }
}, {
  tableName: 'edu_employee',
  paranoid: true
});

ScheduledNotif.belongsTo(Employee, {
  foreignKey: 'employeeId'
})
console.log("Employee Table", Employee === sequelize.models.edu_employee);
module.exports = Employee;