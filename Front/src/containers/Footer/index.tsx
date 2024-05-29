import Logo from '../../components/Logo'
import { cores } from '../../style/index.ts';

import { FooterContainer, TextFooter } from './styles.ts'


const Footer = () => {
    return (
            <FooterContainer>
                <div className="texto">
                    <TextFooter>Todos os direitos reservados para Destino Brejo</TextFooter>
                    <TextFooter>CAMINHOSDOFRIO.COM.BR | © 2024</TextFooter>
                </div>
                <Logo></Logo>
                <div className='redes'>
                    <i style={{color: cores.principal}} className='bx bxl-instagram-alt'></i>
                    <i style={{color: cores.principal}} className='bx bxl-facebook'></i>
                    <i style={{color: cores.principal}} className='bx bxl-youtube'></i>
                </div>                
            </FooterContainer>
    )
}

export default Footer;