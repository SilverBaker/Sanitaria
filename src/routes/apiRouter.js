const apirouter = require("express").Router();

// Importacion de las distintas rutass
const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");
// const corterouter = require("./cortesRouter");
const muestrarouter = require("./muestraRouter");

// Uso de las distintas rutas
apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/casettes", casetterouter);
// apirouter.use("/cortes", corterouter);
apirouter.use("/muestras", muestrarouter);

module.exports = apirouter;