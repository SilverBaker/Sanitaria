const nodemailer = require("nodemailer");

//Aspecto para enviar el email
const message = {
    from: "sanitariacsm@gmail.com",
    to: "sanitariacsm@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    date: new Date('2000-01-01 00:00:00'),
};

//Crear un objeto para poder el email
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "sanitariacsm@gmail.com",
        pass: "tkvokzdwrvtnewdl",
    },
});

transporter.sendMail(message)