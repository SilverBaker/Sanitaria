const casetteRouter = require("express").Router();
const Casette = require("../database/models/Casette");

casetteRouter.get("/", async(req, res) => {
    const casettes = await Casette.findAll();
    res.json(casettes);
});

casetteRouter.post("/", async(req, res) => {
    const casettes = await Casette.create(req.body);
    res.json(casettes);
});

module.exports = casetteRouter;