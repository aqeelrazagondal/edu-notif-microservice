const { Sequelize } = require('sequelize');


const p = sequelize.authenticate();

p.then(() => {
    console.log("connection secussfully");
}).catch((err) => {
    console.error(err)
})



module.exports = sequelize;