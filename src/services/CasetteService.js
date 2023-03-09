const Casette = require("../database/models/Casette");

const getUnCasette = async(casetteId) => {
    const casette = await Casette.findOne({ where: { id_casette: `${casetteId}` } })
    return casette;
}

const getAllCasettes = async() => {
    const casettes = await Casette.findAll({  order: [['fecha', 'ASC']]});
    return casettes;
}

const crearCasetteService = async(post)=>{
    const casette = await Casette.create(post)
    return casette
}

const buscarPorOrgano = async(organo)=>{
    const casettes = await Casette.findAll({ where: { organo: `${organo}` } });
    return casettes;
}

const buscarPorFecha = async(fecha)=>{
    const casettes = await Casette.findAll({ where: { fecha: `${fecha}` } });
    return casettes;
}

const getOnlyOrganos=async()=>{
    const organos=await Casette.findAll({attributes: ["organo"],group: "organo",});
    return organos
}

module.exports = { getUnCasette, getAllCasettes, crearCasetteService,buscarPorOrgano,buscarPorFecha,getOnlyOrganos }