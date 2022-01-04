import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.white};

  p {
    max-width: 1300px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.1rem;
  }
`
export const FooterTop = styled.div`
  background: ${({ theme }) => theme.third};
  padding: 2.8rem 0;
  text-align: center;

  a {
    color: ${({ theme }) => theme.white};
    transition: all 150ms ease-in;

    &:hover {
      color: ${({ theme }) => theme.fourth};
    }
  }

  @media (max-width: 980px){
    display: flex;
    flex-direction: column;

    a {
      margin-bottom: .5rem;
      border-bottom: 2px solid ${({ theme }) => theme.second};
      padding: .5rem;
      width: fit-content;
      text-align: center;
      margin: 0 auto;      

      &:after {
        display: none;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
  a {
    &:after {
      content: '';
      border-right: 2px solid ${({ theme }) => theme.second};
      padding-left: 1rem;
      margin-right: 1rem;
      font-weight: bold;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`
export const FooterBottom = styled.div`
  background: ${({ theme }) => theme.second};
  padding: 1rem 0;
`