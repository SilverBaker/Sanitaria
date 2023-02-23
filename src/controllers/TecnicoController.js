const Tecnico=require("../database/models/Tecnico")
const Services=require("../services/TecnicoService.js")


const getTecnicos = async (req, res) => {
    const tecnicos = await Tecnico.findAll();
    res.json(tecnicos);
}

const getUnTecnicoId=async (req, res) => {
    const tecnicos = await Tecnico.findByPk(req.params.id);
    tecnicos!=null?res.json(tecnicos):res.json({message:"No se ha encontrado al usuario perteneciente a ese id"})
}


const getUnTecnicoMail=async (req,res)=>{
    const tecnicos=await Services.getUnTecnicoMail(req.params.mail)
    tecnicos!=null?res.json(tecnicos):res.json({message:"No se ha encontrado al usuario propietario de ese email"})

    
}

module.exports={getTecnicos,getUnTecnicoId,getUnTecnicoMail}