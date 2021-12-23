import React from 'react'
import Image from 'next/image';

import { HeroContainer } from './styles';
import AnatPalpLogo from '../../assets/anatomia-palpatoria-avancada-logo.png';

function Hero() {
  return (
    <HeroContainer>
      <Image src={AnatPalpLogo} width={442} height={442}/>
      <div className='txt_hero'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>Morbi ac nulla et lectus hendrerit ultricies. Donec non placerat lorem, et.</p>
        <div className='txt_hero_bottom'>
          <a href="#">Adquira nosso curso</a>
          <a href="#modulos">Lista de conteúdo das aulas</a>
        </div>
      </div>
    </HeroContainer>
  )
}

export default Hero;