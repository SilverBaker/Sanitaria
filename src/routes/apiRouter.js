const apirouter = require("express").Router();

// const clientesrouter = require("./clienteRouter");


// apirouter.use("/compras", compraRouter)

const tecnicorouter = require("./tecnicoRouter");
const casetterouter = require("./casetteRouter");

apirouter.use("/tecnicos", tecnicorouter);
apirouter.use("/casettes", casetterouter);

module.exports = apirouter;