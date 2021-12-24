import styled from "styled-components";

export const ModulesContainer = styled.section`
  margin: 4.6rem auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 1rem;
  
  h2 {
    color: ${({theme}) => theme.second};
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 4.6rem;

    @media (max-width: 550px){
      font-size: 2rem;
    }
  }

  #modulos {
    display: flex;
    justify-content: space-around;

    @media (max-width: 980px){
      flex-direction: column;
    }
  }
`;

export const CardMod = styled.div`
  max-width: 300px;
  height: 600px;
  background: ${({theme}) => theme.gradient};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 15px 0;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);

  @media (max-width: 980px){
    max-width: unset;
    height: auto;
    margin-bottom: 2rem;
    padding: 2rem;

    ul {

      li {
        line-height: 30px !important;
      }
    }
  }

  h4 {
    color: ${({theme}) => theme.second};
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    @media (max-width: 550px){
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: ${({theme}) => theme.white};
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #FFFFFF;
    width: 100%;
    text-align: center;
  }

  ul {
    color: ${({theme}) => theme.white};
    font-size: 1.1rem;

    li {
      line-height: 20px;
    }
  }
`;