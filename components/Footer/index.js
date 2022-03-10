import Link from 'next/link';
import { FooterBottom, FooterContainer, FooterTop } from './styles';

function Footer(){
  return (
    <FooterContainer>
      <FooterTop>
        <Link href="/terms#politica">Política de privacidade</Link>
        <Link href="/terms#termos">Termos de uso</Link>
        <Link href="/terms#aviso">Aviso legal</Link> 
        <p>“Esse produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, por meio da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações. Os termos e políticas da Hotmart podem ser acessados aqui, antes mesmo da conclusão da compra."</p>
      </FooterTop>
      <FooterBottom>
        <p>© 2022 <strong>Anatomia Palpatória Avançada</strong> - Desenvolvido por <strong>Eagle</strong>.</p>
      </FooterBottom>
    </FooterContainer>
  )
};

export default Footer;