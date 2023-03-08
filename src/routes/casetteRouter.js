const casetteRouter = require("express").Router();
const Casette = require("../database/models/Casette");
const middlewares=require("../middlewares/middlewares")
const Controller=require("../controllers/CasetteController")

casetteRouter.get("/", Controller.getCasettes);

casetteRouter.post("/",middlewares.checkToken, Controller.crearCasette);


module.exports = casetteRouter;