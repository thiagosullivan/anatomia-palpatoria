import React from 'react'
import { CardMod, ModulesContainer } from './styles';

function Modules() {
  return (
    <ModulesContainer id="modulos">
      <h2>Módulos do Curso</h2>

      <div className="modulos">
        <CardMod>
          <h4>Módulo 1</h4>
          <p>Esqueleto Axial – Coluna e Pelve</p>
          <ul>
            <li>1.1 – Osteologia do Crânio,</li>
            <li>1.2 – Músculos da Face e ATM,</li>
            <li>1.3 – Osteologia da Coluna cervical,</li>
            <li>1.4 – Músculos da Coluna Cervical,</li>
            <li>1.5 – Inervação de Cabeça e pescoço,</li>
            <li>1.6 – Osteologia coluna lombar e pelve,</li>
            <li>1.7 – Músculos Pelve e coluna lombar,</li>
            <li>1.8 – Ossos e músculos coluna torácica.</li>
          </ul>
        </CardMod>
        <CardMod>
          <h4>Módulo 2</h4>
          <p>Esqueleto Apendicular Superior</p>
          <ul>
            <li>2.1 – Osteologia da Cintura Escapular,</li>
            <li>2.2 – Músculos peitorais e Deltoides,</li>
            <li>2.3 – Musculo Trapézio e Manguito Rotador,</li>
            <li>2.4 – Músculos anteriores do antebraço,</li>
            <li>2.5 – Músculos Anteriores do antebraço e mão,</li>
            <li>2.6 – Mão,</li>
            <li>2.7 - Neurovascular membro superior.</li>
          </ul>
        </CardMod>
        <CardMod>
          <h4>Módulo 3</h4>
          <p>Esqueleto Apendicular Inferior</p>
          <ul>
            <li>3.1 – Glúteo e Músculos da coxa,</li>
            <li>3.2 – Pratica Glúteo e Músculos da coxa,</li>
            <li>3.3 – Músculos anteriores e posteriores da coxa,</li>
            <li>3.4 – Joelho,</li>
            <li>3.5 – Perna, Pé e neurovascular do Membro Inferior,</li>
            <li>3.6 – Pratica perna e pé e neurovascular membro inferior,</li>
            <li>3.7 – Neurovascular Membro Inferior.</li>
          </ul>
        </CardMod>
        <CardMod>
          <h4>Módulo 4</h4>
          <p>Visceral</p>
          <ul>
            <li>4.1 – Localização topográfica e Palpação Visceral.</li>
          </ul>
        </CardMod>
      </div>
    </ModulesContainer>
  )
}

export default Modules;