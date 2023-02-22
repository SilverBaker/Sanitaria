const Tecnico=require("./models/Tecnico")
const Casette=require("./models/Casette")
const Corte=require("./models/Corte")
const Muestra=require("./models/Muestra")

// 1 Ténico realiza M Casette
Tecnico.hasMany(Casette)
Casette.belongsTo(Tecnico)

// 1 Casette tiene M Cortes
Casette.hasMany(Corte)
Corte.belongsTo(Casette)

// 1 Corte obtiene M Muestras
Corte.hasMany(Muestra)
Muestra.belongsTo(Corte)