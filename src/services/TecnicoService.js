const Tecnico = require("../database/models/Tecnico");
const { QueryTypes } = require('sequelize');

const getUnTecnicoMail=async(email)=>{
    const [tecnicos,metadata]=await Tecnico.sequelize.query(
        "select * from tecnicos where email=?",
            {
              replacements: [email],
              type: QueryTypes.SELECT
            }
        )
    return tecnicos
    
    
    // .then(res.json(tecnicos))
    // .catch(res.json({response:"No se ha podido encontrar el usuario vinculado a ese correo"}));
    ;
}

module.exports={getUnTecnicoMail}



// await sequelize.query(
//     'SELECT * FROM projects WHERE status = ?',
//     {
//       replacements: ['active'],
//       type: QueryTypes.SELECT
//     }
//   );