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
              <h4>Charlize THeron</h4>
              <p>Maecenas ut lectus eu sem ultrices porttitor nec sit amet justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porttitor eros a elit commodo facilisis. Morbi auctor scelerisque felis ac porttitor. Integer vitae magna quis enim tempor condimentum. Morbi tempus, risus a maximus ornare, diam tellus fringilla leo, ut varius ex nisi nec sapien. In et ullamcorper nunc.</p>
              <div className='opinion_card_txt_bottom'>
                <span>Social Media</span>
                <span>Nextflix</span>
              </div>
            </div>
          </OpinionCard>
          <OpinionCard>
            <div className='opinion_img'>
              <Image src={DepoTwo} width={200} height={200} alt='Depoimento 2' />
            </div>
            <div className='opinion_card_txt'>
              <h4>Terry Crews</h4>
              <p>Integer finibus arcu ac metus elementum tincidunt. In imperdiet, ex vitae convallis blandit, ex ipsum bibendum diam, a iaculis risus libero ut risus. Nam vehicula eget orci ac luctus. Vivamus commodo leo venenatis, auctor mauris consectetur, ullamcorper libero.</p>
              <div className='opinion_card_txt_bottom'>
                <span>Diretor de Marketing</span>
                <span>DC Comics</span>
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
                <span>Marvel Studios</span>
              </div>
            </div>
          </OpinionCard>
        </div>
      </div>
    </OpnionsContainer>
  )
}

export default Opinions
