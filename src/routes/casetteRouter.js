const casetteRouter = require("express").Router();
const middlewares=require("../middlewares/middlewares")
const Controller=require("../controllers/CasetteController")

casetteRouter.get("/", Controller.getCasettes);

casetteRouter.post("/", middlewares.checkToken, Controller.crearCasette);

casetteRouter.get("/organo/:organo" , middlewares.checkToken, Controller.getPorOrgano)

casetteRouter.get("/fecha/:fecha" , middlewares.checkToken, Controller.getPorFecha)


module.exports = casetteRouter;