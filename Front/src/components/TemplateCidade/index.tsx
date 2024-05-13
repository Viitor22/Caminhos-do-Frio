import { TextoCidade } from '../../style/index.ts'
import { TemplateContainer, TituloCidade } from './index.ts';

type Props = {
    nome: string,
    foto: string,
    texto: string
}

const TemplateCidade = ({nome, foto, texto}: Props) => {
    return (
        <>
        <TemplateContainer>
            <div className="title">
                <TituloCidade>{nome}</TituloCidade>
            </div>
            <div className="text">
                <TextoCidade>
                    {texto}
                </TextoCidade>
            </div>
            <div className="images">
                <img src={foto} alt="" />
            </div>
        </TemplateContainer>
        </> 
    );
}

export default TemplateCidade;