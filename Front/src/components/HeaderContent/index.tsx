import { useNavigate } from "react-router-dom";

import { Link } from "../../style"
import { Arrow, Dropdown } from "./styles"

import Logo from "../Logo";
import { useGetCidadesQuery } from "../../services/api";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const HeaderContent = () => {
    const { data } = useGetCidadesQuery()
    const {itens} = useSelector((state: RootReducer) => state.cidade)

    
    const navigate = useNavigate();
    
    const rotaHome = () => {
        navigate('/')
    }
    
    if(!itens){
        
    } else {
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
                                {itens.map((city) => (<li onClick={() => (navigate(`/cidades/${city.nome}`))} key={city.nome}>{city.nome}</li>))}
                            </ul>
                        </Dropdown>
                    </div>
                    
                    <Link>Contato</Link>
                </ul>
            </div>
        )
    }
    
}

export default HeaderContent