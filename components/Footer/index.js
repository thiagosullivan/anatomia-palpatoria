import Link from 'next/link';
import { FooterBottom, FooterContainer, FooterTop } from './styles';

function Footer(){
  return (
    <FooterContainer>
      <FooterTop>
        <Link href="/terms#politica">Política de privacidade</Link>
        <Link href="/terms#termos">Termos de uso</Link>
        <Link href="/terms#aviso">Aviso legal</Link> 
      </FooterTop>
      <FooterBottom>
        <p>© 2022 <strong>Anatomia Palpatória Avançada</strong> - Desenvolvido por <strong>Eagle</strong>.</p>
      </FooterBottom>
    </FooterContainer>
  )
};

export default Footer;