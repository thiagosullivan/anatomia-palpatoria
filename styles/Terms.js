import styled from "styled-components";
import theme from "./theme";

export const Container = styled.section`
  .terms_container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0;

    h2 {
      color: ${({theme}) => theme.grey};
      font-size: 3rem;
      margin: 3rem 0 1rem;
      text-align: center;
    }
    h3 {
      color: ${({theme}) => theme.grey};
      font-size: 2rem;
      margin: 1rem 0;
    }
    p {
      margin: .5rem 0;
      line-height: 2rem;
      text-align: justify;
      font-size: 1rem;
    }
    ul {
      li {
        margin: .5rem 0 .5rem 1rem;
      }
    }
  }
`
