const muestraRouter = require("express").Router();
const Muestra = require("../database/models/Muestra");
const Controller=require("../controllers/MuestraController")

muestraRouter.get("/", Controller.getMuestras);

muestraRouter.get("/:id", Controller.getUnMuestra);

muestraRouter.post("/", Controller.createMuestra);

module.exports = muestraRouter;