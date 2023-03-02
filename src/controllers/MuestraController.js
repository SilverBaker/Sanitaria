const Services = require("../services/MuestraService");

const getMuestras = async(req, res) => {
    const muestras = await Services.getAllMuestras();
    res.json(muestras);
}

const getUnMuestra = async(req, res) => {
    const muestra = await Services.getUnMuestra(req.params.id);
    muestra != null ? res.json(muestra) : res.json({ message: "No se ha encontrado ningun registro" });
}

module.exports = { getMuestras, getUnMuestra }