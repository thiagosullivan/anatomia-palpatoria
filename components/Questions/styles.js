import styled from "styled-components";

export const QuestionsContainer = styled.section`

  background-color: ${({theme}) => theme.first};

  .questions_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 4.8rem 1rem;

    h2 {
      text-align: center;
      color: ${({theme}) => theme.white};
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 7.5rem;
      
      @media (max-width: 550px){
        font-size: 2rem;
        margin-bottom: 3rem;
      }
    }
    
  }
`;

export const AccordionSection = styled.div`

`;

export const AccordionContainer = styled.div`

  transition: all 300ms ease-in-out;

  .awnserActive {
    transition: all 300ms ease-in-out;
  }
  
  .awnserActive .Dropdown p {
    visibility: visible !important;
    color: ${({theme}) => theme.white} !important;
    opacity: 1 !important;
    height: auto;
    transition: all 300ms ease-in-out;
  }

  .awnserActive .Dropdown svg {
    transform: rotate(90deg);
    transition: all 100ms ease-in-out;
  }

  .question_cont {
    padding: 1.8rem 0;
    border-bottom: 1px solid ${({theme}) => theme.white};

      .Dropdown {
        p {
          color: ${({theme}) => theme.white};
          margin: 0 1.8rem;
          text-align: justify;
          line-height: 25px;
          visibility: hidden;
          opacity: 0;

          @media (max-width: 660px){
            margin: 0;
          }
        }
      }
  }

  h4 {
    color: ${({theme}) => theme.fourth};
    margin-bottom: 0.75rem;

    svg {
      transform: rotate(0deg);
      transition: all 100ms ease-in-out;
    }
  }
`;

// export const Dropdown = styled.div`
  
//   p {
//     color: ${({theme}) => theme.white};
//     margin-left: 1.8rem;
//     text-align: justify;
//     line-height: 25px;
//     visibility: hidden;
//     opacity: 0;
//     height: 0;
//   }

//   svg {

//   }
// `;