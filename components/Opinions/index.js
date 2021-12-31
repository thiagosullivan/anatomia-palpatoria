import React from 'react'
import Image from 'next/image';

import { OpinionCard, OpnionsContainer, VantagensCard } from './styles'

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
              <Image src={MedkitIcon} alt='Vantagem 1' />
            </div>
            <p>Vivamus ultricies vulputate ante quis feugiat. Nunc imperdiet leo a quam accumsan bibendum. Ut sed condimentum mauris. Suspendisse lorem erat, sollicitudin at nibh et, condimentum rutrum magna. Ut feugiat, arcu sed dignissim condimentum, ex lorem sagittis quam, aliquet rhoncus risus dui a metus. Etiam convallis ipsum id luctus congue. Vestibulum id justo ut augue porttitor pellentesque. Curabitur mollis venenatis lorem, vel semper lorem. Phasellus id dapibus dui. Integer tincidunt interdum erat sed dignissim. Morbi scelerisque blandit odio, eget vehicula quam dictum et.</p>
          </VantagensCard>
          <VantagensCard>
            <div className='vantagem_card_icon'>
              <Image src={HandIcon} alt='Vantagem 2' />
            </div>
            <p>Ut consectetur massa nec nisi tincidunt mollis. Proin scelerisque auctor velit a bibendum. Quisque fermentum aliquam dolor, non tristique nibh porttitor ac. Proin est odio, varius eget justo vitae, efficitur auctor dolor. Etiam laoreet dictum nunc, id lacinia eros molestie a. Quisque non lorem libero. Suspendisse luctus sem eu egestas sollicitudin. Vivamus porttitor, eros auctor mattis aliquet, nisl massa tempus dui, quis rutrum nulla ex rhoncus purus.</p>
          </VantagensCard>
          <VantagensCard>
            <div className='vantagem_card_icon'>
              <Image src={HeartIcon} alt='Vantagem 3' />
            </div>
            <p>Maecenas ut lectus eu sem ultrices porttitor nec sit amet justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus porttitor eros a elit commodo facilisis. Morbi auctor scelerisque felis ac porttitor. Integer vitae magna quis enim tempor condimentum. Morbi tempus, risus a maximus ornare, diam tellus fringilla leo, ut varius ex nisi nec sapien. In et ullamcorper nunc.</p>
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
