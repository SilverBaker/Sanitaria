const nodemailer = require("nodemailer");

const enviarCorreo = (email,password) => {
    //Aspecto para enviar el email
    const message = {
        from: "sanitariacsm@gmail.com",
        to: email,
        subject: "Contraseña de recuperacion",
        text: password,
        date: new Date('2000-01-01 00:00:00'),
    };

    //Crear un objeto para poder el email
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "sanitariacsm@gmail.com",
            pass: "xxcrpoxpnucmugpr",
        },
    });

    transporter.sendMail(message)
}

module.exports=enviarCorreo