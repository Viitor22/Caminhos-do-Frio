import { useState,  } from "react";
import { useNavigate } from "react-router-dom"
import { BarraPesquisa, HeaderButton, HeaderLogo, HeaderNav, Link, SearchButton } from "./style"
import logo from '../../assets/logo.jpg'
import { cores } from "../../style";


const Header = () => {
    const [BotaoPesquisaAtivo, setBotaoPesquisaAtivo] = useState(false);

    const navigate = useNavigate();
    const rotaLogin = () => {
        navigate('/login')
    }

    return(
    <HeaderNav>
        <div>
        <SearchButton onClick={() => setBotaoPesquisaAtivo(!BotaoPesquisaAtivo)}>
            <i style={{
                backgroundColor: BotaoPesquisaAtivo ? cores.branco :'',
                color: BotaoPesquisaAtivo ? cores.principal :'',
                marginLeft: BotaoPesquisaAtivo ? '-28px' : '',
                marginTop: BotaoPesquisaAtivo ? '-28px' : '',
                transition: '0.4s ease;'
            }} className="bi bi-search"></i>
        </SearchButton>
        {BotaoPesquisaAtivo ? (
                <BarraPesquisa className="container">
                        <input placeholder='Buscar...' className='js-search' type="text" />
                </BarraPesquisa>
                    
                ) : (
                    <></>
                )}
        </div>
        <div className='content'>
            <ul className='links'>
                <Link>About</Link>
                <HeaderLogo>
                    <img src={logo} alt="Caminhos do Frio Logo" />
                </HeaderLogo>
                <Link>Contact</Link>
            </ul>
        </div>
        <HeaderButton onClick={rotaLogin}>Login</HeaderButton>
    </HeaderNav>
    )
}

export default Header