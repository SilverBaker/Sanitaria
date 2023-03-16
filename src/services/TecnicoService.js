const Tecnico = require("../database/models/Tecnico");
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jwt-simple")
const nodemailer=require("../email/sendEmail");

/**
 * Recibe email como parámetro y se encarga de devolver el usuario de la base de datos con ese email
 * 
 * 
 * @param {String} email 
 * @returns {JSON}
 */
const getUnTecnicoMail = async (email) => {
    const tecnico = await Tecnico.findOne({ where: { email: `${email}` } })
    const response = await Tecnico.update({"password": bcrypt.hashSync(tecnico.password, 10)},{
            where: {
              email: email
            }
        }
    )

    nodemailer(email,tecnico.password)
    return tecnico;
}



const getAllTecnicos = async () => {
    const tecnicos = await Tecnico.findAll();
    return tecnicos
}



const createToken = (user) => {
    const payload = {
        usuarioId: user.id_tecnico,
        createdAt: moment().unix(),
        expiredAt: moment().add(8, "hours").unix()
    }
    return jwt.encode(payload, "Token256")
}


/**
 * Recibe
 * 
 * @param {JSON} req 
 * @returns 
 */
const login = async (req) => {
    const user = await Tecnico.findOne({
        where: {
            email: req.email
        }
    })

    if (user) {
        const isCorrectPass = bcrypt.compareSync(req.password, user.password)
        if (isCorrectPass) {
            return { succes: createToken(user) }
        }
        else {
            return { error: "Usuario o contraseña incorrectos" }
        }
    }

}


const register = async (user) => {
    let response
    try {
        response = await Tecnico.create(
            {
                "nombre": user.nombre,
                "apellidos": user.apellidos,
                "email": user.email,
                "password": bcrypt.hashSync(user.password, 10),
                "curso": user.curso,
                "centro": user.centro
            }
        )
    } catch (error) {
        response = { message: "Error al registrar" }
    }

    return response
}

module.exports = { getUnTecnicoMail, getAllTecnicos, register, login }