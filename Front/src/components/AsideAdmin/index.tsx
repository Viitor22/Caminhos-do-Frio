import * as S from "./styles"
import { useParams } from "react-router-dom"
import { tipos } from "../../models/opcoesTuristicas";
import { useState } from "react";


const AsideAdmin = () => {
    const { nome } = useParams();
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <S.Wrapper>
            <S.BtnCollapse onClick={() => (setMenuAberto(!menuAberto))} style={{ transform: menuAberto ? 'rotate(180deg)' : '', left: menuAberto ? '235px' : '-10px' }}>
                <i className="bx bx-chevron-right"></i>
            </S.BtnCollapse>
            <S.AsideContainer className={menuAberto ? '' : 'is-open'}>
                <div className="header">
                    <h5>Descubra {nome}</h5>
                </div>
                <div className="content">
                    <ul>
                        <span> Atrações </span>
                        {tipos.map((t) => (<S.MenuItem key={t.id}><i className='bx bxs-building-house'></i>{t.nome}</S.MenuItem>))}
                    </ul>
                    <ul>
                        <span> Gerenciar </span>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Adicionar categoria</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Remover categoria</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Adicionar atração</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Remover atração</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Editar atração</S.MenuItem>
                    </ul>
                </div>
            </S.AsideContainer>
        </S.Wrapper>
    )
}

export default AsideAdmin
