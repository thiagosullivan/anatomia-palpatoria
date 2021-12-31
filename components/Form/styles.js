import styled from "styled-components";

export const FormContainer = styled.section`
  padding: 8.70rem 0;
  background-color: ${({theme}) => theme.first};

  @media (max-width: 980px){
    padding: 3rem 0 ;
  }

  .form_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 980px){
      flex-direction: column;
    }

    .form_txt {
      max-width: 420px;
      width: 100%;
      margin-right: 2.5rem;

      @media (max-width: 980px){
        max-width: unset;
        margin-right: 0;
        margin-bottom: 2rem;

        h2 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      }

      h2 {
        font-size: 3rem;
        font-weight: 700;
        color: ${({theme}) => theme.fourth};
        margin-bottom: 2rem;

        @media (max-width: 550px){
          font-size: 2rem;
        }
      }

      p {
        color: ${({theme}) => theme.white};
        line-height: 25px;
      }
    }
  }
`;

export const FormContact = styled.form`
  max-width: 310px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-areas:
  'nameform nameform'
  'email phone'
  'message message'
  'buttonform buttonform';

  @media (max-width: 980px){
    max-width: 600px;
  }

  @media (max-width: 550px){
    max-width: unset;
    grid-template-areas:
    'nameform'
    'email'
    'phone'
    'message'
    'buttonform';

    #email {
      margin-right: unset !important;
    }
  }

  input,
  textarea {
    margin-bottom: 0.62rem;
    padding-left: 0.92rem;
    border: 2px solid ${({theme}) => theme.fourth};
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    transition: all 150ms ease-in;
    color: ${({theme}) => theme.white};
    font-size: 1rem;

    &::placeholder {
      color: ${({theme}) => theme.fourth};
    }

    &:focus {
      transform: scale(1.02);
      box-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
  }
  input,
  button {
    height: 50px;
  }

  #name {
    grid-area: nameform;
  }
  #email {
    grid-area: email;
    margin-right: 0.62rem;
  }
  #phone {
    grid-area: phone;
  }
  #message {
    grid-area: message;
    height: 100px;
    padding-top: 0.92rem;
  }

  #buttonform {
    grid-area: buttonform;
    resize: none;
    background-color: ${({theme}) => theme.fourth};
    border: 2px solid ${({theme}) => theme.fourth};
    color: ${({theme}) => theme.first};
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 150ms ease-in;

    &:hover {
      background-color: ${({theme}) => theme.first};
      color: ${({theme}) => theme.fourth};
    }
  }
`;