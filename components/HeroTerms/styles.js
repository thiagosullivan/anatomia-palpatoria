import styled from "styled-components";

export const HeroContainer = styled.section`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 1300px;
  padding: 0 1rem;

  @media (max-width: 980px){
    flex-direction: column;
    

    .img_hero {
      margin-bottom: 2rem;
      width: 80%;
      display: flex;
      justify-content: center;

      > span {
        width: 80%;
      }
    }
  }

  .txt_hero {
    
    max-width: 800px;
    width: 100%;

    h1 {
      font-size: 4rem;
      color: ${({theme}) => theme.first};
      font-weight: 800;
      margin-bottom: 1.6rem;
      text-transform: uppercase;

      @media (max-width: 980px) {
        text-align: center;
      }

      @media (max-width: 520px){
        font-size: 2rem !important;
      }
    }

    p {
      color: ${({theme}) => theme.grey};
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 1.6rem;

      @media (max-width: 980px) {
        text-align: justify;
        margin: 2rem 0;
      }

      @media (max-width: 520px){
        font-size: 1.2rem !important;
      }
      
    }

    .txt_hero_bottom {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 520px){
        flex-direction: column;

        a {
          &:first-child {
            margin-right: 0 !important;
            margin-bottom: 2rem;
          }
        }
      }

      a {
        color: ${({theme}) => theme.white};
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }

        &:first-child {
          background-color: ${({theme}) => theme.first};
          padding: 0.9rem;
          border-radius: 5px;
          box-shadow: 0 4px 4px rgba(0,0,0,.25);
          margin-right: 3.1rem;
          transition: all 150ms ease-in;

          &:hover {
            background-color: ${({theme}) => theme.second};
          }
        }

        &:last-child {
          font-size: 1.2rem;
          font-weight: 700;
        }
        }
    }
    
  }
`;