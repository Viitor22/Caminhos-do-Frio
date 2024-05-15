import { HeaderButton, HeaderLogo, HeaderNav, Link } from "./style"
import logo from '../../assets/logo.jpg'


const Header = () => {
    return(
    <HeaderNav>
        <div className='content'>
            <ul className='links'>
                <Link>About</Link>
                <HeaderLogo>
                    <img src={logo} alt="Caminhos do Frio Logo" />
                </HeaderLogo>
                <Link>Contact</Link>
            </ul>
        </div>
        <HeaderButton>Login</HeaderButton>
    </HeaderNav>
    )
}

export default Header