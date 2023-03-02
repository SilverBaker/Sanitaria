const Muestra = require("../database/models/Muestra");

const getUnMuestra = async(muestraId) => {
    const muestra = await Muestra.findOne({ where: { id_muestra: `${muestraId}` } });
    return muestra;
}

const getAllMuestras = async() => {
    const muestras = await Muestra.findAll();
    return muestras;
}

module.exports = { getUnMuestra, getAllMuestras }