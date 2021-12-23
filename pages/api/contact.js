import nodemailer from 'nodemailer';

const email = 'contato@anatomiapalpatoriaavancada.com.br';
const emailPass = '#Anatomi@Palpatoria2021';

const transporter = nodemailer.createTransport({
  host: 'email-ssl.com.br',
  port: 465,
  auth: {
    user: email,
    pass: emailPass,
  }
});

const mailer = ({ senderMail, name, text }) => {
  const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from
  };
  
  return new Promise((resolve, reject) => {
    transporter.sendMain(message, (error, info) => {
      error ? reject(error) : resolve(info)
    });
  })
};

export default async (req, res) => {
  const { senderMail, name, content } = req.body;

  if(!senderMail || !name || !content) {
    res.status(403).send();
    return
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};