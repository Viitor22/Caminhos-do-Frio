import * as S from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import close from '../../assets/close 1.png'
import { useDispatch } from "react-redux";
import { remover } from "../../store/reducers/cidades.ts"


const AsideAdmin = () => {
    const { nome } = useParams();
    const [menuAberto, setMenuAberto] = useState(false)
    const [ModalRemoverAberto, setModalRemoverAberto] = useState(false)

    const navigate = useNavigate();
    const rotaNovaCidade = () => {
        navigate('/novacidade')
    }

    const dispatch = useDispatch()
    let cidade: string = ''
    const removerCidade = (cidadeRemovida: string) => {
        dispatch(remover(cidadeRemovida))
    }

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
                        <S.MenuItem ><i className='bx bx-chair'></i> Artesanato</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-bowl-hot'></i> Onde comer</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-building-house'></i>Engenhos</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-pizza'></i> Food Park</S.MenuItem>
                        <S.MenuItem ><i className='bx bx-body'></i>Guia de Turismo</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-hotel'></i>Onde se hospedar</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-arch'></i>Pontos Turísticos</S.MenuItem>
                        <S.MenuItem ><i className='bx bxs-calendar'></i>Calendário de Eventos</S.MenuItem>
                    </ul>
                    <ul>
                        <span> Gerenciar </span>
                        <S.MenuItem  onClick={rotaNovaCidade}><i className='bx bxs-bookmark-plus'></i>Adicionar cidade</S.MenuItem>
                        <S.MenuItem onClick={() => (setModalRemoverAberto(!ModalRemoverAberto))}><i className='bx bxs-trash'></i>Remover cidade</S.MenuItem>
                    </ul>
                </div>
            </S.AsideContainer>
            <S.Modal className={ ModalRemoverAberto ? 'visible' : ''}>
                <S.ModalContent >
                    <header>
                        <img onClick={() => setModalRemoverAberto(false)} src={close} alt="Ícone de fechar" />
                    </header>
                    <S.ModalContentContainer>
                    <S.WrapperModal>
                        <h2>Escolha a cidade pra remover</h2>
                        <form action="#">
                            <S.Input className="input-field">
                                <input type="nome" id="nome" placeholder="Nome da cidade" onChange={(e) => (cidade = e.target.value)} required />
                                <i className="bx bxs-user"></i>
                            </S.Input>
                            <S.LoginButton type="submit" onClick={() => (removerCidade(cidade), setModalRemoverAberto(false))} className="login">Remover</S.LoginButton>
                        </form>
                    </S.WrapperModal>
                    </S.ModalContentContainer>
                </S.ModalContent>
                <S.Overlay onClick={() => setModalRemoverAberto(false)}></S.Overlay>
            </S.Modal>
        </S.Wrapper>
    )
}

export default AsideAdmin
