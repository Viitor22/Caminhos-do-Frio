import { useSelector } from "react-redux";
import CardCidade from "../../components/CardCidades/index.tsx"
import { RootReducer } from "../../store/index.ts";

import { SectionContainer } from "./styles.ts"

const SectionMapa = () => {
    const {itens} = useSelector((state: RootReducer) => state.cidade)

    
    return (
        <SectionContainer>
            {itens.map((city) => (<CardCidade key={city.nome} nomeCidade={city.nome} fotoCidade={city.foto} descricaoCidade={city.descricao}></CardCidade>))}
        </SectionContainer>
    );
}

export default SectionMapa;