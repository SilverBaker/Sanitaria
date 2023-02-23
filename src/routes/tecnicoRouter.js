const tecnicoRouter = require("express").Router();
const Tecnico = require("../database/models/Tecnico");
const Controller = require("../controllers/TecnicoController")

tecnicoRouter.get("/", Controller.getTecnicos);

tecnicoRouter.get("/id/:id", Controller.getUnTecnicoId);

tecnicoRouter.get("/mail/:mail", Controller.getUnTecnicoMail)

tecnicoRouter.post("/", async(req, res) => {
    const tecnicos = await Tecnico.create(req.body);
    res.json(tecnicos);
});

module.exports = tecnicoRouter;