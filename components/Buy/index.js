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
      <p>Basta clicar no botão, adquirir o curso, e ter acesso <span>agora</span>! O preço atual é por um tempo limitado, aproveite e junte-se a nós.</p>
      <p>A oportunidade está em suas mãos, basta dar o próximo passo e buscar o seu espaço junto aos profissionais mais preparados do país.</p>

      <div className='buycard_cont' id="buy">
        <p>Adquira agora!</p>

        <BuyCard>
          <h4>Oferta de<br/> lançamento!</h4>
          <div className='old_price'>
            de R$ <span>520,</span>00
          </div>
          <div className='buycard_price'>
            <span className='por'>Por</span>
            <span>R$</span>
            390,
            <span>00</span>
          </div>
          <p className='under_text'>Ganhe 25% de Desconto e Economize R$ 130,00</p>
          {/* <div className='buycard_txt'>
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
          </div> */}

          <a
            href="https://pay.hotmart.com/K67620803O"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assine Agora
          </a>

          <span className='buycard_warning'>*O preço nunca será alterado enquanto seu plano estiver ativo</span>
        </BuyCard>
      </div>
    </BuySection>
  )
}

export default Buy;