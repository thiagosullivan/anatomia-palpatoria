import styled from "styled-components";

export const QuestionsContainer = styled.section`

  background-color: ${({theme}) => theme.first};
  .questions_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 4.8rem 0;

    h2 {
      text-align: center;
      color: ${({theme}) => theme.white};
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 7.5rem;
    }
  }
`;