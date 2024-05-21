import {LogoDiv} from './styles.ts';
import logo from '../../assets/logo.jpg'


const Logo = () => {
    return (
        <LogoDiv>
            <img src={logo} alt="Caminhos do Frio Logo" />
        </LogoDiv>
    )
}

export default Logo;

