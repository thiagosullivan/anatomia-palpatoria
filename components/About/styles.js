import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: ${({theme}) => theme.first};
  padding-top: 4rem;
`;

export const AboutContent = styled.section`
  margin: 0 auto;
  max-width: 1300px;
  max-height: 1050px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .about_txt_1 {
    order: 1;
    margin-bottom: auto;
  }
  .about_img {
    order: 2;
    margin-top: auto;
  }
  .about_txt_2 {
    order: 3;
  }
  .about_txt_3 {
    order: 4;
  }  

  .about_txt_cont {
    max-width: 600px;
    width: 100%;
    margin-bottom: 2.5rem;

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: ${({theme}) => theme.second};
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.1rem;
      font-weight: 700;
      color: ${({theme}) => theme.white};
      line-height: 25px;
      text-align: justify;
    }
  }
`;