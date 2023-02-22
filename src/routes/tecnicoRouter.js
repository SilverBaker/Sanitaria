const tecnicoRouter = require("express").Router();
const Tecnico = require("../database/models/Tecnico");

tecnicoRouter.get("/", async(req, res) => {
    const tecnicos = await Tecnico.findAll();
    res.json(tecnicos);
});

tecnicoRouter.post("/", async(req, res) => {
    const tecnicos = await Tecnico.create(req.body);
    res.json(tecnicos);
});

module.exports = tecnicoRouter;