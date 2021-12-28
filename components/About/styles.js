import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: ${({theme}) => theme.first};
  padding-top: 4rem;
`;

export const AboutContent = styled.section`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  max-height: 1000px;
  display: grid;
  grid-template-areas:
  'txtone txttwo'
  'aboutimg txtthree';

  @media (max-width: 1180px){
    max-height: 1150px;
    
    .about_img {
      bottom: 41px;
    }
  }

  @media (max-width: 1035px){
    max-height: 1320px;
    
    .about_img {
      bottom: 41px;
    }
  }

  @media (max-width: 980px){
    max-height: unset;
    grid-template-areas:
    'txtone'
    'txttwo'
    'txtthree'
    'aboutimg';
    justify-content: center;
    
    .about_img {
      bottom: 0px !important;
    }
  }  

  .about_txt_1 {
    margin-bottom: auto;
    grid-area: txtone;
  }
  .about_img {
    position: relative;
    margin-top: auto;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    grid-area: aboutimg;
    bottom: 250px;

    @media (max-width: 980px) {
      margin: 0 auto;
    }
  }
  .about_txt_2 {
    grid-area: txttwo;
  }
  .about_txt_3 {
    grid-area: txtthree;
  }  

  .about_txt_cont {    
    max-width: 600px;
    width: 100%;
    margin-bottom: 2.5rem;
    padding-right: 2rem;

    @media (max-width: 980px){
      max-width: unset;
      padding-right: 0;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: ${({theme}) => theme.fourth};
      margin-bottom: 1.2rem;

      @media (max-width: 980px){
        text-align: center;
      }

      @media (max-width: 550px){
        font-size: 2rem;
      }
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