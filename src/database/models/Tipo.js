const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Tipo extends Model{}

Tipo.init({
    id_tipo:{
        type:DataTypes.STRING,
        primaryKey:true,

    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:"tipo",
    timestamps:false,
})

module.exports=Tipo