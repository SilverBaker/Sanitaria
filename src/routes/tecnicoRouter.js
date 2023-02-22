const tecnicoRouter = require("express").Router();
const Tecnico = require("../database/models/Tecnico");
const Controller = require("../controllers/TecnicoController")

tecnicoRouter.get("/", Controller.consultarTecnicos);

tecnicoRouter.get("/id/:id", Controller.consultarUnTecnico);

tecnicoRouter.post("/", async(req, res) => {
    const tecnicos = await Tecnico.create(req.body);
    res.json(tecnicos);
});

module.exports = tecnicoRouter;