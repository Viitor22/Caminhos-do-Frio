import { Link } from "../../style"
import { Arrow, Dropdown, HeaderLogo } from "./styles"
import logo from '../../assets/logo.jpg'

const HeaderContent = () => {
    return(
        <div className='content'>
            <ul className="links">
                <Link>Home</Link>
                <Link>Sobre</Link>
                <HeaderLogo>
                    <img src={logo} alt="Caminhos do Frio Logo" />
                </HeaderLogo>
                <div className="hover">
                    <Link>Cidades</Link>
                    <Arrow className="dropdown-content"></Arrow>
                    <Dropdown className="dropdown-content">
                        <ul>
                            <li>Areia</li>
                            <li>Alagoa Grande</li>
                            <li>Alagoa Nova</li>
                            <li>Bananeiras</li>
                            <li>Borborema</li>
                            <li>Matinhas</li>
                            <li>Pilões</li>
                            <li>Remígio</li>
                            <li>Serraria</li>
                            <li>Solânea</li>
                            </ul>
                    </Dropdown>
                </div>
                
                <Link>Contato</Link>
            </ul>
        </div>
    )
}

export default HeaderContent