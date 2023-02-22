const muestraRouter = require("express").Router();
const Muestra = require("../database/models/Muestra");

muestraRouter.get("/", async(req, res) => {
    const muestras = await Muestra.findAll();
    res.json(muestras);
});

muestraRouter.post("/", async(req, res) => {
    const muestras = await Muestra.create(req.body);
    res.json(muestras);
});

module.exports = muestraRouter;