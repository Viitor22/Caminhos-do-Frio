import { AsideContainer, BtnCollapse, MenuItem, Wrapper } from "./styles"
import { useParams } from "react-router-dom"
import { tipos } from "../../models/opcoesTuristicas";
import { useState } from "react";

const AsideAdmin = () => {
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
                        {tipos.map((t) => (<MenuItem key={t.id}><i className='bx bxs-building-house'></i>{t.nome}</MenuItem>))}
                    </ul>
                    <ul>
                        <span> Gerenciar </span>
                        <MenuItem ><i className='bx bxs-building-house'></i>Adicionar categoria</MenuItem>
                        <MenuItem ><i className='bx bxs-building-house'></i>Remover categoria</MenuItem>
                        <MenuItem ><i className='bx bxs-building-house'></i>Adicionar atração</MenuItem>
                        <MenuItem ><i className='bx bxs-building-house'></i>Remover atração</MenuItem>
                        <MenuItem ><i className='bx bxs-building-house'></i>Editar atração</MenuItem>
                    </ul>
                </div>
            </AsideContainer>
        </Wrapper>
    )
}

export default AsideAdmin
