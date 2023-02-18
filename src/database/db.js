const Sequelize=require("sequelize")

const sequelize= new Sequelize(
    "sanitaria",//nombre bd
    "root",//nombre user
    "",//contraseña usuario
    {
    host:"localhost",
    dialect:"mysql",
})


module.exports=sequelize