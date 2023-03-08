const Services = require("../services/CasetteService");

const getCasettes = async(req, res) => {
    const casettes = await Services.getAllCasettes();
    res.json(casettes);
}

const getUnCasette = async(req, res) => {
    const casette = await Services.getUnCasette(req.params.id);

    casette != null ? res.json(casette) : res.json({ message: "No se ha encontrado ningun registro" });
}

const crearCasette=async(req, res) => {
    const casettes = await Services.crearCasetteService(req.body);
    res.json(casettes);
}

const getPorOrgano = async(req, res) => {
    const casette = await Services.buscarPorOrgano(req.params.organo);

    casette != null ? res.json(casette) : res.json({ message: "No se ha encontrado ningun registro" });
}


module.exports = { getCasettes, getUnCasette,crearCasette, getPorOrgano }