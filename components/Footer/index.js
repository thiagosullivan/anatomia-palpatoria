import { FooterBottom, FooterContainer, FooterTop } from './styles';

function Footer(){
  return (
    <FooterContainer>
      <FooterTop>
        <a>Política de privacidade</a>
        <a>Termos de uso</a>
        <a>Aviso legal</a>
      </FooterTop>
      <FooterBottom>
        <p>© 2022 <strong>Anatomia Palpatória Avançada</strong> - Desenvolvido por <strong>Eagle</strong>.</p>
      </FooterBottom>
    </FooterContainer>
  )
};

export default Footer;