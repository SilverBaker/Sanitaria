const apirouter = require("express").Router();

// const clientesrouter = require("./clienteRouter");


// apirouter.use("/compras", compraRouter)

const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");
const corterouter = require("./cortesRouter");

apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/casettes", casetterouter);
apirouter.use("/cortes", corterouter);

module.exports = apirouter;