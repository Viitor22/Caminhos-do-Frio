import { AsideContainer, BtnCollapse, MenuItem, Wrapper } from "./styles"
import { useParams } from "react-router-dom"
import { useState } from "react";

const Aside = () => {
    const { nome } = useParams();
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <Wrapper>
            <BtnCollapse onClick={() => (setMenuAberto(!menuAberto))} style={{ transform: menuAberto ? 'rotate(180deg)' : '', left: menuAberto ? '235px' : '-10px' }}>
                <i className="bx bx-chevron-right"></i>
            </BtnCollapse>
            <AsideContainer className={menuAberto ? '' : 'is-open'}>
                <div className="header">
                    <h5>Descubra {nome}</h5>
                </div>
                <div className="content">
                    <ul>
                        <span> Atrações </span>
                        <MenuItem ><i className='bx bx-chair'></i> Artesanato</MenuItem>
                        <MenuItem ><i className='bx bxs-bowl-hot'></i> Onde comer</MenuItem>
                        <MenuItem ><i className='bx bxs-building-house'></i>Engenhos</MenuItem>
                        <MenuItem ><i className='bx bxs-pizza'></i> Food Park</MenuItem>
                        <MenuItem ><i className='bx bx-body'></i>Guia de Turismo</MenuItem>
                        <MenuItem ><i className='bx bxs-hotel'></i>Onde se hospedar</MenuItem>
                        <MenuItem ><i className='bx bxs-arch'></i>Pontos Turísticos</MenuItem>
                        <MenuItem ><i className='bx bxs-calendar'></i>Calendário de Eventos</MenuItem>
                    </ul>
                </div>
            </AsideContainer>
        </Wrapper>
    )
}

export default Aside
