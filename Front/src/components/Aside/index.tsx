import { useState } from "react";
import { AsideContainer, BtnCollapse, MenuItem, Wrapper } from "./styles"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Aside = () => {
    const { itens } = useSelector((state: RootReducer) => state.turismo)
    const { nome } = useParams();
    const [menuAberto, setMenuAberto] = useState(false)



    return (
        <Wrapper>
            <BtnCollapse onClick={() => (setMenuAberto(!menuAberto))} style={{ transform: menuAberto ? '' : 'rotate(180deg)', left: menuAberto ? '-10px' : '235px' }}>
                <i className="bx bx-chevron-right"></i>
            </BtnCollapse>
            <AsideContainer className={menuAberto ? 'is-open' : ''}>
                <div className="header">
                    <h5>Descubra {nome}</h5>
                </div>
                <div className="content">
                    <ul>
                        <span> Atrações </span>
                        {itens.map((t) => (<MenuItem value={t.id}><i className='bx bxs-building-house'></i>{t.nome}</MenuItem>))}
                    </ul>
                </div>
            </AsideContainer>
        </Wrapper>
    )
}

export default Aside
