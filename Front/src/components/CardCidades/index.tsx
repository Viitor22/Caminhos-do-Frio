import { useState } from "react"
import { TextoCidade } from "../../style/index.ts"
import * as S from "./styles.ts"
import { Button } from "./styles.ts"
import close from '../../assets/close 1.png'
import { useNavigate } from "react-router-dom"

type Props = {
    nomeCidade: string
    fotoCidade: string
}

const CardCidade = ({nomeCidade,fotoCidade}: Props) => {
    const [ModalActive, setModalActive] = useState(false);
    const navigate = useNavigate();

    const rotaCidade = () => {
        navigate(`/cidades/${nomeCidade}`)
    }

    return (
        <>
        <S.CardDiv>
            <img src={fotoCidade}/>
            <div className='card-content'>
                <S.CardTitle>
                <S.SubTitle>{nomeCidade}</S.SubTitle>
                </S.CardTitle>
                <TextoCidade className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus, consequuntur harum voluptas eveniet accusamus id repellat consequatur dicta error recusandae doloremque voluptatum dignissimos nulla quibusdam. Sit aliquid nesciunt deserunt.</TextoCidade>
                <Button onClick={() => (setModalActive(true))}>Saiba Mais</Button>
            </div>
        </S.CardDiv>
        <S.Modal className={ ModalActive ? 'visible' : ''}>
            <S.ModalContent >
                <header>
                    <img onClick={() => setModalActive(false)} src={close} alt="Ícone de fechar" />
                </header>
                <S.ModalContentContainer>
                    <img src={fotoCidade} alt="" />
                    <div className="text-content">
                        <S.SubTitle>{nomeCidade}</S.SubTitle>
                        <TextoCidade>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita debitis perspiciatis maiores sit nostrum. Possimus repudiandae, in sapiente rerum quod nihil numquam dolor explicabo? Ad nihil id fugiat soluta? Provident!</TextoCidade>
                        <Button onClick={rotaCidade}>Visitar site</Button>
                    </div>
                </S.ModalContentContainer>
            </S.ModalContent>
            <div className='overlay'>
            </div>
        </S.Modal>
        </>
)
}

export default CardCidade;