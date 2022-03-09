import styled from "styled-components";

export const OpnionsContainer = styled.section`
  background: ${({theme}) => theme.thirdGradient};
  padding: 9.3rem 0;

  @media (max-width: 700px){
    padding: 4rem 0;
  }

  .opinions_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 980px){
      .vantagens_cards_cont {
        flex-direction: column;
      }
    }

    h2 {
      color: ${({theme}) => theme.white};
      font-size: 4rem;
      margin-bottom: 5.6rem;
      text-align: center;

      @media (max-width: 550px){
        font-size: 2rem;
      }

    }

    .vantagens_cards_cont {
      display: flex;
      justify-content: space-evenly;

    }

    .opinioes_cards_container {
      h2 {
        margin: 5.6rem ;
      }
    }
  }
`;

export const VantagensCard = styled.section`
  background-color: ${({theme}) => theme.second};
  max-width: 310px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);

  @media (max-width: 980px){
    max-width: unset;
    height: auto;
    margin-bottom: 2rem;
  }

  .vantagem_card_icon {
    margin-bottom: 1rem;
  }

  svg {
    color: ${({theme}) => theme.white};
    width: 100px;
    height: 100px;
    
    path {
      stroke: ${({theme}) => theme.white};
    }
  }

  p {
    color: ${({theme}) => theme.white};
    text-align: justify;
    line-height: 20px;
  }

  ul {
    color: ${({theme}) => theme.white};
    line-height: 20px;
    list-style: inside;
  }
`;

export const OpinionCard = styled.section`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto 3.1rem;
  background: ${({theme}) => theme.thirdGradient};
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
  padding: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px){
    flex-direction: column;
    padding: 2rem;

    .opinion_img {
      margin-right: 0 !important;
      margin-bottom: 2rem;
    }

    .opinion_card_txt {

      h4 {
        text-align: center;
      }

      p {
        margin-bottom: 3rem !important;
      }

      .opinion_card_txt_bottom {
        align-items: center;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  .opinion_img {
    margin-right: 2rem;
  }

  .opinion_card_txt {
    max-width: 780px;
    width: 100%;

    h4 {
      color: ${({theme}) => theme.fourth};
      margin-bottom: 1.3rem;
      font-size: 3rem;
      font-weight: 700;

      @media (max-width: 550px){
        font-size: 2rem;
      }
    }

    p {
      color: ${({theme}) => theme.white};
      margin-bottom: 2rem;
      text-align: justify;
      font-weight: 400;
      line-height: 20px;
    }

    .opinion_card_txt_bottom {
      display: flex;
      flex-direction: column;
      color: ${({theme}) => theme.white};

      span {
        
        font-size: 1.8rem;
        font-weight: 700;

        &:first-child {
          margin-bottom: 0.6rem;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 400;
        }

        &:last-child {
          text-transform: uppercase;
        }
      }
    }
  }
`;