const casetteRouter = require("express").Router();
const middlewares=require("../middlewares/middlewares")
const Controller=require("../controllers/CasetteController")

casetteRouter.get("/", middlewares.checkToken, Controller.getCasettes);

casetteRouter.post("/", middlewares.checkToken, Controller.crearCasette);

casetteRouter.get("/organo", middlewares.checkToken, Controller.onlyOrganos)

casetteRouter.get("/organo/:organo" , middlewares.checkToken, Controller.getPorOrgano)

casetteRouter.get("/fecha/:fecha" , middlewares.checkToken, Controller.getPorFecha)

casetteRouter.post("/:id" , middlewares.checkToken, Controller.getUnCasette)


module.exports = casetteRouter;