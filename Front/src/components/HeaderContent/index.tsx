import { useNavigate } from "react-router-dom";

import { Link } from "../../style"
import { Arrow, Dropdown } from "./styles"
import { cidades } from "../../models/cidade";

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
                            {cidades.map((city) => (<li onClick={() => (navigate(`/cidades/${city.nome}`))} key={city.nome}>{city.nome}</li>))}
                        </ul>
                    </Dropdown>
                </div>
                
                <Link>Contato</Link>
            </ul>
        </div>
    )
}

export default HeaderContent