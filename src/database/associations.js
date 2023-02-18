const Tecnico=require("./models/Tecnico")
const Casette=require("./models/Casette")
const Corte=require("./models/Corte")
const Muestra=require("./models/Muestra")
const Tincion=require("./models/Tincion")
const Tipo=require("./models/Tipo")

// 1 Ténico realiza M Casette
Tecnico.hasMany(Casette)
Casette.belongsTo(Tecnico)

// 1 Casette tiene M Cortes
Casette.hasMany(Corte)
Corte.belongsTo(Casette)

// 1 Corte obtiene M Muestras
Corte.hasMany(Muestra)
Muestra.belongsTo(Corte)

// 1 Muestra tiene 1 tincion
Muestra.hasOne(Tincion)
Tincion.hasOne(Muestra)

// M Muestras pertenecen a 1 tipo
Tipo.hasMany(Muestra)
Muestra.belongsTo(Tipo)