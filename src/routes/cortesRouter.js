const corteRouter = require("express").Router();
const Corte = require("../database/models/Corte");

corteRouter.get("/", async(req, res) => {
    const cortes = await Corte.findAll();
    res.json(cortes);
});

corteRouter.post("/", async(req, res) => {
    const cortes = await Corte.create(req.body);
    res.json(cortes);
});

module.exports = corteRouter;