'use strict'
const { DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");
const Employee = require('./employee')
const serviceProvider = require('./serviceProvider')
const Employer = require('./employer');
const Admin = require('./admin');

const User = sequelize.define('User', {
  // id:{
  //   type:DataTypes.INTEGER,
  //   autoIncrement:true,
  //   primaryKey:true
  // },

  photo: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('photo')
    },
    set(value) {
      this.setDataValue('photo', value);
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('phoneNumber')
    },
    set(value) {
      this.setDataValue('phoneNumber', value);
    }
  },
  password: {
    type: DataTypes.STRING,
    // allowNull: false,
    // get() {
    //   return this.getDataValue('password')
    // },
    // set(value) {
    //   this.setDataValue('password', value);
    // }
  },
  confirmPassword: {
    type: DataTypes.STRING,
    // allowNull: false,
    // get() {
    //   return this.getDataValue('confirmPassword')
    // },
    // set(value) {
    //   this.setDataValue('confirmPassword', value);
    // }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    unique: {
      msg: 'Email Already registered'
    },
    isemail: true,
    get() {
      return this.getDataValue('email');
    },
    set(value) {
      return this.setDataValue('email', value);
    }
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue('roleId');
    },
    set(value) {
      return this.setDataValue('roleId', value);
    }
  },
  emailVerified: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('emailVerified');
    },
    set(value) {
      return this.setDataValue('emailVerified', value);
    }
  },
  adminVerified: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('adminVerified');
    },
    set(value) {
      return this.setDataValue('adminVerified', value);
    }
  },
  statusId: {
    type: DataTypes.INTEGER,
    get() {
      return this.getDataValue('statusId');
    },
    set(value) {
      return this.setDataValue('statusId', value);
    }
  },
  // currentPackage: {
  //   type: DataTypes.STRING
  // },
  // previousPackage: {
  //   type: DataTypes.STRING
  // },
  // willingPackage: {
  //   type: DataTypes.STRING
  // },
  // paymentSuccess: {
  //   type: DataTypes.TINYINT
  // }
},
  {
    tableName: "user",
    paranoid: true
  });



Employee.belongsTo(User, {
  foreignKey: 'userId'
})

serviceProvider.belongsTo(User, {
  foreignKey: 'userId'
})

Employer.belongsTo(User, {
  foreignKey: 'userId'
})

Admin.belongsTo(User, {
  foreignKey: 'userId'
})
console.log("User Table", User === sequelize.models.User);
module.exports = User;