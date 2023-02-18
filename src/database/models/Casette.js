const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Casette extends Model{}

Casette.init({
    id_muestra:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    fecha:{
        type:DataTypes.STRING,
        allowNull:false
    },
    caracteristicas:{
        type:DataTypes.STRING,
        allowNull:false
    },
    observaciones:{
        type:DataTypes.STRING,
    },
    imagen:{
        type:DataTypes.BLOB,
    },
    qr_casette:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    modelName:"casette",
    timestamps:false,
})

module.exports=Casette