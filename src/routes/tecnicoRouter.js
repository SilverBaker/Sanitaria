const tecnicoRouter = require("express").Router();
const Controller = require("../controllers/TecnicoController")

tecnicoRouter.get("/", Controller.getTecnicos);

tecnicoRouter.get("/mail/:mail", Controller.getUnTecnicoMail)

tecnicoRouter.post("/register", Controller.registro)

tecnicoRouter.post("/login", Controller.login)


module.exports = tecnicoRouter;