const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Muestra extends Model{}

Muestra.init({
    id_corte:{
        type:DataTypes.STRING,
        primaryKey:true,

    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    observaciones:{
        type:DataTypes.STRING,
    },
    qr_muestra:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    sequelize,
    modelName:"muestra",
    timestamps:false,
})

module.exports=Muestra