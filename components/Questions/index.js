import React, { useState } from 'react'
import { QuestionsContainer } from './styles'
import AccordionQuestions from './AccordionQuestions';

function Questions() {

  return (
    <QuestionsContainer>
      <div className='questions_cont'>
        <h2>Dúvidas frequentes...</h2>
        <AccordionQuestions />
      </div>
    </QuestionsContainer>
  )
}

export default Questions
