import styled from "styled-components";

export const HeroContainer = styled.section`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 1300px;

  .txt_hero {
    
    max-width: 800px;
    width: 100%;

    h1 {
      font-size: 4rem;
      color: ${({theme}) => theme.first};
      font-weight: 800;
      margin-bottom: 1.6rem;
    }

    p {
      color: ${({theme}) => theme.grey};
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 1.6rem;
      
    }

    .txt_hero_bottom {

      display: flex;
      align-items: center;
      justify-content: center;

      a {
        &:first-child {
          background-color: ${({theme}) => theme.first};
          color: ${({theme}) => theme.white};
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
          color: ${({theme}) => theme.grey};
          font-size: 1.2rem;
          font-weight: 700;
        }
        }
    }
    
  }
`;