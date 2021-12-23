import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 8.70rem 0;
  background-color: ${({theme}) => theme.first};

  .form_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    .form_txt {
      max-width: 420px;
      width: 100%;
      margin-right: 5rem;      

      h2 {
        font-size: 3rem;
        font-weight: 700;
        color: ${({theme}) => theme.second};
        margin-bottom: 2rem;
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
  display: grid;
  grid-template-areas:
  'nameform nameform'
  'email phone'
  'message message'
  'buttonform buttonform';

  input,
  textarea {
    margin-bottom: 0.62rem;
    padding-left: 0.92rem;
    border: 2px solid ${({theme}) => theme.second};
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    transition: all 150ms ease-in;
    color: ${({theme}) => theme.white};
    font-size: 1rem;

    &::placeholder {
      color: ${({theme}) => theme.second};
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
    background-color: ${({theme}) => theme.second};
    border: 2px solid ${({theme}) => theme.second};
    color: ${({theme}) => theme.white};
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 150ms ease-in;

    &:hover {
      background-color: ${({theme}) => theme.white};
      color: ${({theme}) => theme.second};
    }
  }
`;