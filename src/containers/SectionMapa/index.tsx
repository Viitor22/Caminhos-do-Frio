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
    texto?: string
}

const cidades: Cidade[] = [
    {
        nome: 'Areia',
        foto: areia
    },
    {
        nome: 'Bananeiras',
        foto: bananeiras
    },
    {
        nome: 'Solânea',
        foto: solanea
    },
    {
        nome: 'Matinhas',
        foto: matinhas
    },
    {
        nome: 'Alagoa Nova',
        foto: alagoa
    },
    {
        nome: 'Pilões',
        foto: matinhas
    },
    {
        nome: 'Serraria',
        foto: matinhas
    },
    {
        nome: 'Borborema',
        foto: matinhas
    },
    {
        nome: 'Remígio',
        foto: matinhas
    },
    {
        nome: 'Alagoa Grande',
        foto: matinhas
    },
]

const SectionMapa = () => {
    return (
        <>
        <div style={{position: 'absolute'}}>
            <Logo></Logo>
        </div>
        <SectionContainer>
            {cidades.map((city) => (<CardCidade key={city.nome} nomeCidade={city.nome} fotoCidade={city.foto}></CardCidade>))}
        </SectionContainer>
        </> 
    );
}

export default SectionMapa;