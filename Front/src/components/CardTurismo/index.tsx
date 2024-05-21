import { Button, Texto } from "../../style"
import { CardTurismoMain, SpanSeparator, TituloCard } from "./styles"

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
                <h2>Contato</h2>
            </div>
            <div>
                <h2>Redes Sociais</h2>
            </div>
            <div>
                <h2>Endereço</h2>
            </div>
        </div>
        <Button>Como chegar</Button>
    </CardTurismoMain>
    )
}

export default CardTurismo