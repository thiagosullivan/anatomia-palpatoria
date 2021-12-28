import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;

const email = process.env.MAILADDRESS;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;

const OAuth2_client = new OAuth2(clientId, clientSecret);
OAuth2_client.setCredentials({ refresh_token: refreshToken });

const accessToken = OAuth2_client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
});

const mailer = ({ senderMail, nome, phone, text }) => {
  const from = nome && senderMail ? `${nome} <${senderMail}>` : `${nome || senderMail}`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${nome}`,
    text: `
      Nome: ${nome}\n
      Telefone: ${phone}\n
      E-mail: ${senderMail}\n
      ${text}
    `,
    replyTo: from
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    });
  })
};

export default async (req, res) => {
  const { senderMail, nome, content, phone } = req.body;

  if(senderMail === '' || nome === '' || content === '') {
    res.status(403).send();
    return
  }

  const mailerRes = await mailer({ senderMail, nome, text: content, phone });
  res.send(mailerRes);
};