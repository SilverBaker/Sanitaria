const Tecnico = require("../database/models/Tecnico");

const getUnTecnicoMail=async(email)=>{
    const tecnico=await Tecnico.findOne({ where: { email: `${email}` } })
    return tecnico
    ;
}

const getAllTecnicos=async()=>{
    const tecnicos=await Tecnico.findAll();
    return tecnicos
}

const register=async(user)=>{
    let response
    try{
        response=await Tecnico.create(
            {
                "nombre": user.nombre,
                "apellidos": user.apellidos,
                "email": user.email,
                "password": user.password,
                "curso": user.curso,
                "centro": user.centro
            }    
        )
    }catch(error){
        response={ message: "Usuario no registrable" }
    }

    return response
}

module.exports={getUnTecnicoMail,getAllTecnicos,register}