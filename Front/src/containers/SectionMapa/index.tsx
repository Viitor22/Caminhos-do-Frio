import CardCidade from "../../components/CardCidades/index.tsx"
import { cidades } from "../../models/cidade.ts";

import { SectionContainer } from "./styles.ts"

const SectionMapa = () => {
    return (
        <SectionContainer>
            {cidades.map((city) => (<CardCidade key={city.nome} nomeCidade={city.nome} fotoCidade={city.foto} descricaoCidade={city.descricao}></CardCidade>))}
        </SectionContainer>
    );
}

export default SectionMapa;