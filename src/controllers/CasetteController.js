const Services = require("../services/CasetteService");

const getCasettes = async(req, res) => {
    const casettes = await Services.getAllCasettes();
    res.json(casettes);
}

const getUnCasette = async(req, res) => {
    const casette = await Services.getUnCasette(req.params.id);

    casette != null ? res.json(casette) : res.json({ message: "No se ha encontrado ningun registro" });
}

module.exports = { getCasettes, getUnCasette }