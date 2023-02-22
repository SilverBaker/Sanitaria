const apirouter = require("express").Router();

// const clientesrouter = require("./clienteRouter");


// apirouter.use("/compras", compraRouter)

const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");
const corterouter = require("./cortesRouter");
const muestrarouter = require("./muestraRouter");

apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/casettes", casetterouter);
apirouter.use("/cortes", corterouter);
apirouter.use("/muestras", muestrarouter);

module.exports = apirouter;