import Aside from "../../components/Aside/index.tsx";
import CardTurismo from "../../components/CardTurismo/index.tsx";
import { CidadeContainer } from "./styles.ts";


const TemplateCidade = () => {
    return (
        <CidadeContainer>
            <Aside></Aside>
            <CardTurismo></CardTurismo>
        </CidadeContainer> 
    );
}

export default TemplateCidade;