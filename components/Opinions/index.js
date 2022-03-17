import React from 'react'
import Image from 'next/image';

import { OpinionCard, OpnionsContainer, VantagensCard } from './styles'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {GrCertificate} from 'react-icons/gr'

import HandIcon from '../../assets/hand.png';
import HeartIcon from '../../assets/heart.png';
import MedkitIcon from '../../assets/medkit.png';
import DepoOne from '../../assets/depo-1.png';
import DepoTwo from '../../assets/depo-2.png';
import DepoThree from '../../assets/depo-3.png';
import DepoFour from '../../assets/depo-4.png';

function Opinions() {
  return (
    <OpnionsContainer>
      <div className='opinions_cont'>
        <h2>Vantagens ao participar</h2>
        <div className='vantagens_cards_cont'>
          <VantagensCard>
            <div className='vantagem_card_icon'>
              <HiOutlineDesktopComputer />
            </div>
            <ul>
              <li>Estude onde e quando quiser;</li>
              <li>Reveja aulas sempre que necessário;</li>
              <li>Curso completo com aulas em vídeo;</li>
              <li>Know-How de profissionais renomados;</li>
              <li>Conteúdo avançado;</li>
              <li>Certificado de participação;</li>
              <li>Demonstração prática de técnicas;</li>
            </ul>
          </VantagensCard>
          <VantagensCard>
            <div className='vantagem_card_icon'>
              <GrCertificate />
            </div>
            <p>Tenha em um único curso, toda informação necessária para aprimorar as suas técnicas e entregar um melhor trabalho para os seus pacientes.</p>
          </VantagensCard>
        </div>
        <div className='opinioes_cards_container'>
          <h2>Opinião dos Participantes</h2>

          <OpinionCard>
            <div className='opinion_img'>
              <Image src={DepoOne} width={200} height={200} alt='Depoimento 1' />
            </div>
            <div className='opinion_card_txt'>
              <h4>Rodrigo Deller</h4>
              <p>O professor Rodrigo Rabbottini é um excelente professor e  profissional , tem uma didática muito boa que facilita o aprendizado, faz correlações clinicas que ajudam muito no raciocínio do dia a dia do consultório. Curso excelente, com toda certeza recomendo!</p>
              <div className='opinion_card_txt_bottom'>
                <span>Aluno</span>
                {/* <span>Nextflix</span> */}
              </div>
            </div>
          </OpinionCard>
          <OpinionCard>
            <div className='opinion_img'>
              <Image src={DepoTwo} width={200} height={200} alt='Depoimento 2' />
            </div>
            <div className='opinion_card_txt'>
              <h4>Flávia Zardim</h4>
              <p>Conheci o professor Rodrigo Rabbottini em 2018 na minha formação de Microfisioterapia e me identifiquei muito com a didática e postura dele em sala de aula!<br/>
              É um profissional que possui grande domínio do conteúdo ministrado, fazendo uso de linguagem esclarecedora, além de possuir vasto conhecimento em Anatomia, Fisiologia e na parte Clínica, sempre transmitindo muita confiança aos alunos, além de somar muito conhecimento em nosso dia-a-dia.<br/>
              Trazemos para nosso atendimento uma base do que aprendemos na faculdade, porém, na prática percebemos uma lacuna ou algum ponto em defasagem, e este curso de Anatomia Palpatória será de grande valia para nosso crescimento profissional, agregando mais conhecimento e mais segurança diante dos nossos pacientes!<br/>
              Com certeza um investimento de grande importância para nós!!!</p>
              <div className='opinion_card_txt_bottom'>
                <span>Aluna</span>
                {/* <span>DC Comics</span> */}
              </div>
            </div>
          </OpinionCard>
          <OpinionCard>
            <div className='opinion_img'>
              <Image src={DepoThree} width={200} height={200} alt='Depoimento 3' />
            </div>
            <div className='opinion_card_txt'>
              <h4>Daniele Soares</h4>
              <p>O Rodrigo R. Rabbottini é daqueles professores essenciais para a vida de qualquer aluno e qualquer profissional. Tem uma didática excelente, uma habilidade para explicar e ensinar com objetividade e clareza, mas de forma profunda.<br/>
              Ele tem compromisso com o aprendizado do aluno e está sempre disponível para nos auxiliar no que for preciso: tanto no âmbito técnico quanto profissional.</p>
              <div className='opinion_card_txt_bottom'>
                <span>Aluna</span>
              </div>
            </div>
          </OpinionCard>
          <OpinionCard>
            <div className='opinion_img'>
              <Image src={DepoFour} width={200} height={200} alt='Depoimento 3' />
            </div>
            <div className='opinion_card_txt'>
              <h4>Thaís Tonetti Moroso</h4>
              <p>O que falar do Professor Rodrigo Rabottine! Excelente pessoa e profissional, possui uma coerência e sabedoria fantástica! Com sua didática maravilhosa consegue transmitir as informações de forma clara e precisa!!!! O curso de anatomia palpatória é de extrema importância para formação de qualquer profissional que atua na área de terapia manual, e também qualquer área da fisioterapia!!! Super recomendo!!!!!</p>
              <div className='opinion_card_txt_bottom'>
                <span>Aluna</span>
              </div>
            </div>
          </OpinionCard>
        </div>
      </div>
    </OpnionsContainer>
  )
}

export default Opinions
