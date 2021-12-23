import Image from 'next/image';
import React from 'react'
import { AboutContainer, AboutContent } from './styles';
import AnatPerson from '../../assets/anatomia-pessoa.png';

function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <div className='about_txt_cont about_txt_1'>
          <h2>O que é Anatomia Palpatória Avançada?</h2>
          <p>Anatomia palpatória é a possibilidade e/ou capacidade de identificar, localizar e tatear as estruturas anatômicas.</p>
          <p>Chamamos de Anatomia Palpatória Avançada® pois aqui apresentamos estruturas que normalmente não são faladas e ensinadas e também técnicas palpatórias diferenciadas que facilitam o aprendizado e também a realização pratica.</p>
        </div>
        <div className='about_txt_cont about_txt_2'>
          <h2>Importância da Anatomia palpatória</h2>
          <p>O profissional da saúde atualmente utiliza com muita frequência as mãos como recurso de avaliação e tratamento.  Atualmente as técnicas de terapia manual tem ganhado cada vez mais espaço nos consultórios com diversas áreas de atuação. Você provavelmente conhece algumas técnicas de terapia manual e certamente trabalha com alguma delas, e isso é ótimo, pois em geral são técnicas que apresentam excelentes resultados.</p>
          <p>O que precisamos entender é que para que eu possa fazer uma boa avaliação manual e também empregar técnicas terapêuticos manuais e essencial o conhecimento de anatomia palpatória, sem esse conhecimento não é possível realizar uma boa avaliação e também um bom procedimento terapêutico.</p>
          <p>Pense na seguinte situação, o seu cliente apresenta algum sintoma em determinado musculo e você precisa avaliar e também tratar esse musculo, porem você não sabe como localiza-lo, apesar de conhecer o musculo nos livros de anatomia, você não consegue chegar ate ele, palpar esse musculo, ou seja, não consegue tocar no local da possível lesão, a consequência disso é que você não vai conseguir fazer uma boa avaliação e muito menos um bom tratamento manual.</p>
        </div>
        <div className='about_txt_cont about_txt_3'>
          <h2>Conteúdo do curso de Anatomia Palpatória Avançada</h2>
          <p>Neste curso o aluno terá acesso a um conteúdo único onde dividimos por seguimentos e estruturas a serem observadas.</p>
          <p>Dividimos em esqueleto Axial, e esqueleto apendicular superior e inferior com suas cinturas além das estruturas viscerais, tudo isso em imagens de altíssima resolução com DUAS INCIDENCIAS de câmeras para melhor visualização e compreensão e demonstração em imagens 3D das estruturas a serem localizadas.</p>
        </div>
        <div className='about_img'>
          <Image src={AnatPerson} width={630} />
        </div>
      </AboutContent>
    </AboutContainer>
  )
}

export default About;