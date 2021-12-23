import React from 'react'
import { FormContact, FormContainer } from './styles';

function Form() {
  return (
    <FormContainer>
      <div className='form_cont'>
        <div className='form_txt'>
          <h2>
            Mais Dúvidas?<br/>
            Entre em contato:
          </h2>
          <p>Tem alguma dúvida? Precisando de suporte ou mais informações? Entre em contato!<br/> Ficaremos felizes em ajudar 😁</p>
        </div>
        <FormContact>
          <input type='text' placeholder='Seu Nome' id='name' />
          <input type='email' placeholder='Seu E-mail' id='email' />
          <input type='tel' placeholder='Seu Whatsapp' id='phone' />
          <textarea type='text' placeholder='Sua Mensagem' id='message' />
          <button type='submit' id='buttonform'>Enviar</button>
        </FormContact>
      </div>
    </FormContainer>
  )
}

export default Form;
