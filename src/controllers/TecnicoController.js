const Tecnico=require("../database/models/Tecnico")
const Services=require("../services/TecnicoService.js")


const consultarTecnicos = async (req, res) => {
    const tecnicos = await Tecnico.findAll();
    res.json(tecnicos);
}

const consultarUnTecnico=async (req, res) => {
    const tecnicos = await Tecnico.findByPk(req.params.id);
    res.json(tecnicos);
}

module.exports={consultarTecnicos,consultarUnTecnico}