import Aside from "../../components/Aside/index.tsx";
import CardTurismo from "../../components/CardTurismo/index.tsx";
import img from "../../assets/FOTOS-CIDADES-CF/Areia/CENTRO-AREIA-PB-scaled.jpg"
import { CidadeContainer, Div } from "./styles.ts";


const TemplateCidade = () => {
    return (
        <>
            <Aside></Aside>
            <CidadeContainer>
                <Div></Div>
                <CardTurismo></CardTurismo>
                <div className="imagem">
                    <img src={img} alt="" />
                </div>
            </CidadeContainer>
        </>
        
    );
}

export default TemplateCidade;