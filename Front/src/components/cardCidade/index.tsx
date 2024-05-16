import { TextoCidade } from "../../style/index.ts"
import { CardDiv, CardTitle, SubTitle, Button} from "./index.ts"

type Props = {
    nomeCidade: string
    fotoCidade: string
}

const CardCidade = ({nomeCidade,fotoCidade}: Props) => {
    return (
        <CardDiv>
            <img src={fotoCidade}/>
            <div className='card-content'>
                <CardTitle>
                <SubTitle>{nomeCidade}</SubTitle>
                </CardTitle>
                <TextoCidade className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus, consequuntur harum voluptas eveniet accusamus id repellat consequatur dicta error recusandae doloremque voluptatum dignissimos nulla quibusdam. Sit aliquid nesciunt deserunt.</TextoCidade>
                <Button>Saiba Mais</Button>
            </div>
        </CardDiv>
)
}

export default CardCidade;