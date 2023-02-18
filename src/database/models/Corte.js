const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Corte extends Model{}

Corte.init({
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
    qr_corte:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    sequelize,
    modelName:"corte",
    timestamps:false,
})

module.exports=Corte