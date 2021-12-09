import nodemailer from 'nodemailer';

export const sendEmail = async (req, res) => {

    // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'radzio.wr@gmail.com', // generated ethereal user
            pass: 'qwe456rty', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    const email = {
        emailSenderPersonality: req.body.sender,
        emailSenderAddress: req.body.email,
        emailSubject: req.body.subject,
        emailMessage: req.body.message

    }

    const messageHTML = `
    <p>Nowa wiadomość z formularza :)</p>
    <h3>Dane nadawcy</h3>
    <ul>  
      <li>Imię i nazwisko: ${email.emailSenderPersonality}</li>
      <li>Email: ${email.emailSenderAddress}</li>
      <li>Temat: ${email.emailSubject}</li>
    </ul>
    <h3>Treść wiadomości</h3>
    <p>${email.emailMessage}</p>
    `

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `Nodemailer <radzio.wr@gmail.com>`, // sender address
        to: "radzio.wr@gmail.com", // list of receivers
        subject: `${email.emailSubject}`, // Subject line
        html: messageHTML,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json('Email send...')
}