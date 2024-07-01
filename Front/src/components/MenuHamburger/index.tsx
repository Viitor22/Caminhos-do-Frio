import { useState } from "react"
import { ContainerDiv, Dropdown } from "./style"
import { useNavigate } from "react-router-dom";
import { RootReducer } from "../../store";
import { useSelector } from "react-redux";
import { Link } from "../../style";

const MenuHamburger = () => {
    const [active, setActive] = useState(false);
    const {itens} = useSelector((state: RootReducer) => state.cidade)

    
    const navigate = useNavigate();
    const rotaHome = () => {
        navigate('/')
    }
    
    if(!itens){
        
    } else {
        function menuShow() {
            let menuMobile = document.querySelector('.mobile-menu');
            if (!menuMobile){

            }else{
                if (menuMobile.classList.contains('open')) {
                    menuMobile.classList.remove('open');
                } else {
                    menuMobile.classList.add('open');
                }
            }
        }

        return (
            <>
                <ContainerDiv>
                    <nav className="nav-bar">
                        <div onClick={() => {setActive(!active)}} className="mobile-menu-icon">
                            <button onClick={() => (menuShow())}> <i className={active ? 'bx bx-x' : 'bx bx-menu'}></i> </button>
                        </div>
                    </nav>
                    <div className="mobile-menu">
                        <ul>
                            <Link className="nav-item" onClick={rotaHome}>Home</Link>
                            <Link className="nav-item" href="#sobre">Sobre</Link>
                            <div className="hover">
                                <Link className="nav-item" >Cidades</Link>
                                <Dropdown className="dropdown-content">
                                    <ul>
                                        {itens.map((city) => (<li onClick={() => (navigate(`/cidades/${city.nome}`))} key={city.nome}>{city.nome}</li>))}
                                    </ul>
                                </Dropdown>
                            </div>
                                <Link className="nav-item">Contato</Link>
                        </ul>
                    </div>
                </ContainerDiv>
            </>
        )
    }
}

export default MenuHamburger