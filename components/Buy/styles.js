import styled from "styled-components";

export const BuySection = styled.section`
  margin: 8.7rem auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 1rem;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: ${({theme}) => theme.first};
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 550px){
      font-size: 2rem;
    }

    span {
      text-transform: uppercase;
      color: ${({theme}) => theme.second};
    }
  }

  p {
    color: ${({theme}) => theme.grey};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    span {
      text-transform: uppercase;
    }
  }

  .buycard_cont {
    margin: 4.3rem auto 0;

    p {
      font-size: 3.1rem;
      font-weight: 700;
      color: ${({theme}) => theme.first};
      text-align: center;
      margin-bottom: 2.5rem;
      
      @media (max-width: 550px){
        font-size: 2rem;
      }
    }
  }
`;

export const BuyCard = styled.div`
  background: ${({theme}) => theme.secondGradient};
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 3.1rem;

  h4 {
    color: ${({theme}) => theme.white};
    text-align: center;
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }

  .buycard_price {
    color: ${({theme}) => theme.second};
    font-size: 6.25rem;
    display: flex;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      font-weight: 400;
      font-size: 3rem;
      margin-right: 0.6rem;

      &:last-child {
        margin-top: 3rem;
        margin-left: 0.6rem;
      }
    }
  }

  .buycard_txt {
    margin-bottom: 3.43rem;

    ul {
      text-align: center;
      li {
        border-bottom: 1px solid ${({theme}) => theme.white};
        padding-bottom: 0.9rem;
        margin-top: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.white};

        span {
          margin-right: 0.5rem;
          color: ${({theme}) => theme.second};
          font-size: 1.8rem;
        }
      }
    }
  }

  a {
    display: block;
    background-color: ${({theme}) => theme.white};
    padding: 1.75rem 4.65rem;
    width: 300px;
    height: 80px;
    border-radius: 20px;
    margin: 0 auto 2.87rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.second};
  }

  .buycard_warning {
    font-size: 0.75rem;
    color: ${({theme}) => theme.white};
    text-align: center;
    display: block;
  }
`;