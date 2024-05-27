import { Button, Texto, cores } from "../../style"
import { CardTurismoMain, SpanSeparator, TextoCard, TituloCard } from "./styles"

const CardTurismo = () => {

    return(
    <CardTurismoMain>
        <TituloCard>
            Teatro Minerva
        </TituloCard>
        <SpanSeparator></SpanSeparator>
        <Texto>
            O Teatro Minerva, inaugurado em 1859, com o nome de Teatro Recreio Dramático. É o primeiro teatro da Paraíba. Possui uma acústica de excelente qualidade. Entrada R$ 6,00 inteira e R$ 3,00 meia - Areia, PB - aberto das 08h às 12h e das 14h às 17horas
        </Texto>
        <div className="contato">
            <div>
                <TextoCard>Contato</TextoCard>
                <Texto>(83) 99912-9313</Texto>
            </div>
            <div>
                <TextoCard>Redes Sociais</TextoCard>
                <i style={{color: cores.principal}} className='bx bxl-instagram-alt'></i>
            </div>
            <div>
                <TextoCard>Endereço</TextoCard>
                <Texto>R. Pedro Américo, 94 - Areia, PB</Texto>
            </div>
        </div>
        <Button>Como chegar</Button>
    </CardTurismoMain>
    )
}

export default CardTurismo