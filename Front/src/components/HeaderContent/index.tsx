import { Link } from "../../style"
import { Arrow, Dropdown } from "./styles"
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

const HeaderContent = () => {
    const navigate = useNavigate();

    const rotaHome = () => {
        navigate('/')
    }

    return(
        <div className='content'>
            <ul className="links">
                <Link onClick={rotaHome}>Home</Link>
                <Link href="#sobre">Sobre</Link>
                <Logo></Logo>
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