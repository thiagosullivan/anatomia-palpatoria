import axios from 'axios';

export const sendContactMail = async (nome, senderMail, content) => {
  const data = {
    nome, senderMail, content
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}