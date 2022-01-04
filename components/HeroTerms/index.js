import React from 'react'
import Image from 'next/image';

import { HeroContainer } from './styles';
import AnatPalpLogo from '../../assets/anatomia-palpatoria-avancada-logo.png';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

function HeroTerms() {
  return (
    <HeroContainer>
      <div className='img_hero'>
        <Image src={AnatPalpLogo} width={442} height={442} alt='Logo da Anatomia Palpatória'/>
      </div>
      <div className='txt_hero'>
        <h1>Anatomia Palpatória Avançada</h1>
        <p>Curso completo com vídeo-aulas personalizadas e exclusivas para o curso online.</p>
        <div className='txt_hero_bottom'>
          <a href="/">
            <HiOutlineArrowNarrowLeft />
            <span>Voltar para a Home</span>
          </a>
        </div>
      </div>
    </HeroContainer>
  )
}

export default HeroTerms;