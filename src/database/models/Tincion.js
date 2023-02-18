const sequelize=require("../db")

const {Model, DataTypes} = require ("sequelize")

class Tincion extends Model{}

Tincion.init({
    id_tincion:{
        type:DataTypes.STRING,
        primaryKey:true,

    },
    imagen:{
        type:DataTypes.BLOB,
        allowNull:false
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false
    },
    observaciones:{
        type:DataTypes.STRING,
    },
    id_tecnico:{
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName:"tincion",
    timestamps:false,
})

module.exports=Tincion