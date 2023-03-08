const Casette = require("../database/models/Casette");

const getUnCasette = async(casetteId) => {
    const casette = await Casette.findOne({ where: { id_casette: `${casetteId}` } })
    return casette;
}

const getAllCasettes = async() => {
    const casettes = await Casette.findAll();
    return casettes;
}

const crearCasetteService = async(post)=>{
    const casette = await Casette.create(post)
    return casette
}

module.exports = { getUnCasette, getAllCasettes, crearCasetteService }