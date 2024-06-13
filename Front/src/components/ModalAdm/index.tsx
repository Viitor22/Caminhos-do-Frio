import { useState } from 'react'
import close from '../../assets/close 1.png'
import * as S from "./styles"


const ModalAdm = () => {
    const [ModalActive, setModalActive] = useState(false)

    return(
    <S.Modal className={ ModalActive ? 'visible' : ''}>
        <S.ModalContent >
        <header>
            <img onClick={() => setModalActive(false)} src={close} alt="Ícone de fechar" />
        </header>
        <S.ModalContentContainer>
            
        </S.ModalContentContainer>
        </S.ModalContent>
        <S.Overlay onClick={() => setModalActive(false)}></S.Overlay>
    </S.Modal>
    )
}

export default ModalAdm