import React from 'react'

import { BuyCard, BuyCont, BuySection } from './styles'

import { AiOutlineCheckCircle } from 'react-icons/ai';

function Buy() {
  return (
    <BuySection>
      <h2>
        Até onde
        <span> VOCÊ </span>
        irá chegar?<br/>
        <span> VOCÊ </span>
        decide!
      </h2>
      <p>Basta clicar no botão e adquirir o curso para ter acesso <span>agora</span> e começar imediatamente. O preço atual é por um tempo limitado, aproveite agora para se juntar à nós.</p>
      <p>Eu estou te esperando para compartilhar com você um <span>curso extraordinário</span>. Adquira agora e faça a sua CARREIRA DECOLAR. Saia de onde está e alcance voos cada vez mais altos.</p>

      <div className='buycard_cont' id="buy">
        <p>Adquira agora!</p>

        <BuyCard>
          <h4>Assinatura<br/> Mensal</h4>
          <div className='buycard_price'>
            <span>R$</span>
            99,
            <span>90</span>
          </div>
          <div className='buycard_txt'>
            <ul>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Contas Comerciais no Facebook e no Instagram;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                WhatsApp Business;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Conta de anúncios para pagamento das propagandas;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Reconhecimento da marca;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Alcance de pessoas;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Tráfego para diversos destinos (site, youtube, google forms, etc...)
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Engajamento;
              </li>
              <li>
                <span><AiOutlineCheckCircle /></span>
                Geração de cadastros;
              </li>
            </ul>
          </div>

          <a href="#">Assine Agora</a>

          <span className='buycard_warning'>*O preço nunca será alterado enquanto seu plano estiver ativo</span>
        </BuyCard>
      </div>
    </BuySection>
  )
}

export default Buy;