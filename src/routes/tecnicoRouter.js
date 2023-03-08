const tecnicoRouter = require("express").Router();
const Tecnico = require("../database/models/Tecnico");
const Controller = require("../controllers/TecnicoController")

tecnicoRouter.get("/", Controller.getTecnicos);

tecnicoRouter.get("/mail/:mail", Controller.getUnTecnicoMail)

tecnicoRouter.post("/register", Controller.registro)

tecnicoRouter.get("/login", Controller.login)


module.exports = tecnicoRouter;