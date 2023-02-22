const apirouter = require("express").Router();

// const clientesrouter = require("./clienteRouter");


// apirouter.use("/compras", compraRouter)

const tecnicorouter = require("./tecnicoRouter");

apirouter.use("/tecnicos", tecnicorouter);


module.exports = apirouter;