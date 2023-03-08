const Services=require("../services/TecnicoService.js")


const getTecnicos = async (req, res) => {
    const tecnicos = await Services.getAllTecnicos()
    res.json(tecnicos);
}


const getUnTecnicoMail=async (req,res)=>{
    const tecnicos=await Services.getUnTecnicoMail(req.params.mail)
    tecnicos!=null?res.json(tecnicos):res.json({message:"No se ha encontrado al usuario propietario de ese email"})
}

const registro=async(req,res)=>{
    const tecnico=await Services.register(req.body)
    res.json(tecnico)
}

const login=async(req,res)=>{
    const user=await Services.login(req.body)
    res.json(user)
  }

module.exports={getTecnicos,getUnTecnicoMail,registro,login}