var express = require('express');
var router = express.Router();
var Menssage = require('../../../model/SendMessage');
var app = express();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.set('secret', process.env.JWT_SECRET);

router.post('/', function (req, res) {

    var menssage = new Menssage({
        Name : req.body.Nombre,
        LastName: req.body.Apellido,
        ContactNumber: req.body.Telefono,
        Email: req.body.Email,
        Subject: req.body.Asunto,
        MenssageLong: req.body.Mensaje

    });
    const msg = {
        to: 'juriscontaasesorescontables@gmail.com',
        from: 'web-no-reply@jurisconta.com',
        subject: menssage.Subject,
        text: 'Notificación de registro',
        html: '<p>¡ Este mensaje ha sido enviado por : <strong>' + menssage.Name + '  ' + menssage.LastName + `</strong>!</p> 
        <p> con numero de telefono: ` + menssage.ContactNumber + `,  Email : ` + menssage.Email + ` </p>
        <br>
        <br>
        <p> ` + menssage.MenssageLong + ` </p>
        
<br>
<br>


<p>Espero su pronta respuesta,</p>`,
    };
    sgMail.send(msg);
    res.status(200).send({
        success: true,
        menssage: 'mensaje enviado'

    });

});

module.exports = router;