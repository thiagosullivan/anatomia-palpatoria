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
              <h4>Scarlett Johansson</h4>
              <p>Vestibulum ut urna pellentesque, gravida enim sed, ultrices neque. Aenean fermentum sodales nisl egestas tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lacinia felis, dignissim luctus sapien dignissim sit amet. Vestibulum pharetra urna eget dolor dictum, ut ornare dolor gravida. Nulla tincidunt, libero eu aliquam consectetur, justo tellus luctus turpis, sit amet condimentum leo felis eu odio. Pellentesque laoreet nisi a sem lacinia, finibus blandit mauris feugiat.</p>
              <div className='opinion_card_txt_bottom'>
                <span>Consultoria</span>
                {/* <span>Marvel Studios</span> */}
              </div>
            </div>
          </OpinionCard>
        </div>
      </div>
    </OpnionsContainer>
  )
}

export default Opinions
