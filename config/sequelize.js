const { Sequelize } = require('sequelize');

// testing
const sequelize = new Sequelize('eduOpening', 'dbuser', '3e#qv/vdYktS', {
  host: '3.209.204.33',
  dialect: 'mysql'
})

//staging
// const sequelize = new Sequelize('edu_opening', 'dbuser', '3e#qv/vdYktS', {
//   host: '54.227.155.120',
//   dialect: 'mysql'
// })


// const sequelize = new Sequelize('edutest','root','root',{
//   host:'localhost',
//   dialect:'mysql'
// })


const p = sequelize.authenticate();

p.then(() => {
    console.log("connection secussfully");
}).catch((err) => {
    console.error(err)
})



module.exports = sequelize;