const Services = require("../services/CorteService");

const getCortes = async(req, res) => {
    const cortes = await Services.getAllCortes();
    res.json(cortes);
}

const getUnCorte = async(req, res) => {
    const corte = await Services.getUnCorte(req.params.id);
    corte != null ? res.json(corte) : res.json({ message: "No se ha encontrado ningun registro" });
}

module.exports = { getCortes, getUnCorte }