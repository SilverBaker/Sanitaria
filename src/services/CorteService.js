const Corte = require("../database/models/Corte");

const getUnCorte = async(corteId) => {
    const corte = await Corte.findOne({ where: { id_corte: `${corteId}` } });
    return corte;
}

const getAllCortes = async() => {
    const cortes = await Corte.findAll();
    return cortes;
}

module.exports = { getUnCorte, getAllCortes }