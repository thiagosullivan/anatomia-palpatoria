import axios from 'axios';

export const sendContactMail = async (nome, senderMail, phone, content,  ) => {
  const data = {
    nome, senderMail, phone, content
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}