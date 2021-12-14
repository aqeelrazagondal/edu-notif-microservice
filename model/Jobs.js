'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

const Jobs = sequelize.define('Edu_job', {
  // id:{
  //   type:DataTypes.INTEGER,
  //   autoIncrement:true,
  //   primaryKey:true
  // },
  jobTitle: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('jobTitle')
    },
    set(value) {
      this.setDataValue('jobTitle', value);
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
  jobDescription: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('jobDescription')
    },
    set(value) {
      return this.setDataValue('jobDescription', value);
    }
  },
  minimumQualification: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('minimumQualification')
    },
    set(value) {
      return this.setDataValue('minimumQualification', value);
    }
  },
  payRate: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('payRate');
    },
    set(value) {
      return this.setDataValue('payRate', value);
    }
  },
  postQuestions: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('postQuestions')
    },
    set(value) {
      return this.setDataValue('postQuestions', value);
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
  additionalInfo: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('additionalInfo')
    },
    set(value) {
      return this.setDataValue('additionalInfo', value);
    }
  },
  submissionDate: {
    type: DataTypes.DATE,
    get() {
      return this.getDataValue('submissionDate')
    },
    set(value) {
      return this.setDataValue('submissionDate', value);
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
  createdAt: {
    type: DataTypes.DATE,
    get() {
      return this.getDataValue('createdAt')
    },
    set(value) {
      return this.setDataValue('createdAt', value);
    }
  },
  applicationLink: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('applicationLink')
    },
    set(value) {
      return this.setDataValue('applicationLink', value);
    }
  },
}, {
  tableName: 'edu_jobs',
  paranoid: true
});
// Expertise.belongsTo(Jobs, {
//   foreignKey: 'jobId'
// })

console.log("Jobs Table", Jobs === sequelize.models.Edu_job);
module.exports = Jobs;