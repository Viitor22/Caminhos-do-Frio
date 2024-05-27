import CardCidade from "../../components/CardCidades/index.tsx"
import areia from '../../assets/areia.jpg'
import alagoa from '../../assets/alagoa.jpg'
import bananeiras from '../../assets/bananeiras.jpg'
import matinhas from '../../assets/matinhas.jpeg'
import solanea from '../../assets/solanea.png'
import { SectionContainer } from "./styles.ts"
import Logo from "../../components/Logo/index.tsx"

export type Cidade = {
    nome: string
    foto: string
    descricao: string
    texto?: string
}

const cidades: Cidade[] = [
    {
        nome: 'Areia',
        foto: areia,
        descricao: ''
    },
    {
        nome: 'Bananeiras',
        foto: bananeiras,
        descricao: ''
    },
    {
        nome: 'Solânea',
        foto: solanea,
        descricao: ''
    },
    {
        nome: 'Matinhas',
        foto: matinhas,
        descricao: ''
    },
    {
        nome: 'Alagoa Nova',
        foto: alagoa,
        descricao: ''
    },
    {
        nome: 'Pilões',
        foto: matinhas,
        descricao: ''
    },
    {
        nome: 'Serraria',
        foto: matinhas,
        descricao: ''
    },
    {
        nome: 'Borborema',
        foto: matinhas,
        descricao: ''
    },
    {
        nome: 'Remígio',
        foto: matinhas,
        descricao: ''
    },
    {
        nome: 'Alagoa Grande',
        foto: matinhas,
        descricao: ''
    },
]

const SectionMapa = () => {
    return (
        <>
        <div style={{position: 'absolute'}}>
            <Logo></Logo>
        </div>
        <SectionContainer>
            {cidades.map((city) => (<CardCidade key={city.nome} nomeCidade={city.nome} fotoCidade={city.foto} descricaoCidade={city.descricao}></CardCidade>))}
        </SectionContainer>
        </> 
    );
}

export default SectionMapa;