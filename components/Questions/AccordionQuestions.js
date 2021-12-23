import React, { useState } from 'react';

import { AccordionContainer, AccordionSection, Dropdown } from './styles';

import { Data } from '../../services/dataquestions';
import { AiFillCaretRight } from 'react-icons/ai';

function AccordionQuestions() {
  const [ clicked, setClicked ] = useState(false);

  const toggle = index => {
    if(clicked === index){

      // if clicked questionis already ActiveXObject, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <AccordionSection>
      <AccordionContainer>
        {Data.map((item, index) => {
          return (
              <div key={index } onClick={() => toggle(index)} key={index} className={'question_cont ' + (clicked === index ? 'awnserActive' : '')}>
                <h4><AiFillCaretRight /> {item.question}</h4> 
                {clicked === index ? (
                  <div className='Dropdown'>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </div>
          )
        })}
      </AccordionContainer>
    </AccordionSection>
  )
}

export default AccordionQuestions
