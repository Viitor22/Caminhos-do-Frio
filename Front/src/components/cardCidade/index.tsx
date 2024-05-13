import {Links} from "../../style/index.ts"
import {CardContainer} from "./index.ts"

type Props = {
    nomeCidade: string
    fotoCidade: string
}

const CardCidade = ({nomeCidade,fotoCidade}: Props) => {
    return (
        <>
        <CardContainer>
            <img src={fotoCidade} alt="" />
            <span><Links>Conheça {nomeCidade}</Links></span>
        </CardContainer>
        </> 
    );
}

export default CardCidade;