const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/sendemail', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.gmx.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'frankblack23@gmx.at',
        pass: 'stargate2309'
    },
    tls: {
        rejectUnauthorized: false
    }
});


  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Your Website" <your@email.com>', // sender address
    to: "receiver@email.com", // list of receivers
    subject: "New contact request from your website", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send({ msg: 'Email has been sent' });
  });
});

app.listen(3000, () => console.log('Server started...'));