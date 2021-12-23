import Image from 'next/image';
import React from 'react'
import { MemberCont, MembersContainer } from './styles';
import EduardoRetondaro from '../../assets/dr-rodolfo.png';
import RodrigoRetondaro from '../../assets/dr-rodrigo.png';

function Members() {
  return (
    <MembersContainer>
      <MemberCont>
        <div className='member_div'>
          <div className='member_img'>
            <Image src={EduardoRetondaro} />
          </div>
          <div className='member_txt'>
            <h3>Eduardo Retondaro</h3>
            <ul>
              <li>- Formado a 24 anos na Estácio de Sá- Rio de Janeiro,</li>
              <li>- Pós graduado em fisioterapia ortopédica e desportiva,</li>
              <li>- Professor na graduação e pós graduação a mais de 20 anos,</li>
              <li>- Disciplinas ministradas: Anatomia humana, anatomia palpatória, cinesioterapia, fisioterapia ortopédica, fisioterapia desportiva, diagnóstico por imagem, amputação, órtese e prótese,</li>
              <li>- Membro da equipe Nilton Petrone (filé) de 1998 a 2004,</li>
              <li>- participei da reabilitação do atleta Ronaldo fenômeno no departamento médico da Inter de Milão- Itália, junto ao Nilton Petrone,</li>
              <li>- Fisioterapeuta no clube Bordeaux- França entre 2012 a 2014,</li>
              <li>- reabilitação do atleta Leo Matos na Ucrânia em 2015,</li>
              <li>- Fisiotepapeuta do atleta Renato Augusto (atualmente no Corìnthians) no Beijing Guoan de Pequim- China de 2016 a 2019,</li>
              <li>- Professor na Unipac-MG de 2020 até os dias de hoje.</li>
            </ul>
          </div>
        </div>
      </MemberCont>
      <MemberCont>
        <div className='member_div'>
          <div className='member_img'>
            <Image src={RodrigoRetondaro} />
          </div>
          <div className='member_txt'>
            <h3>Rodrigo Retondaro Rabbottini</h3>
            <p>Iniciei minha trajetória na Fisioterapia em 1999 e logo no inicio já percebia a importância do conhecimento de Anatomia para minha formação. Incentivado por Eduardo Retondaro, meu professor àquela época, iniciei o estágio no laboratório de anatomia, o qual permaneci ate o final do curso.</p>
            <p>Durante a formação tive acesso a diversas técnicas de terapia manual, o que reforçou a necessidade do conhecimento de Anatomia e acrescentou outra necessidade, o de identificar essas estruturas conhecidas através do toque, evidenciando assim a grande necessidade do amplo conhecimento de Anatomia Palpatória.</p>
            <p>Em 2003 iniciamos nossa primeira turma de Anatomia Palpatória e Testes ortopédicos.</p>
            <p>18 anos após nossa primeira turma, com muito mais experiência clinica e pedagógica estamos trazendo um curso de Anatomia Palpatória Avançada com imagens em altíssima resolução e conteúdo inédito.</p>
            <ul>
              <li>- Fisioterapeuta formado na UNESA 2002,</li>
              <li>- Especialista em Fisioterapia Desportiva e Ortopédica - UNESA 2003,</li>
              <li>- Especialista em Terapia manual e postural - Cesumar 2005,</li>
              <li>- Formação Internacional em Microfisioterapia - 2006,</li>
              <li>- Formação International em Leitura Biológica - 2007,</li>
              <li>- Formação International em Posturoterapia Neuro Sensorial PNS - 2015,</li>
              <li>- Professor da Formação Internacional em Microfisioterapia do básico ao avançado- Brasil e Portugal,</li>
              <li>- Formação internacional ENM,</li>
              <li>- Formação em Geobiologia e Feng Shui,</li>
            </ul>
          </div>
        </div>
      </MemberCont>
    </MembersContainer>
  )
}

export default Members;
