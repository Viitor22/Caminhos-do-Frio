import { AsideContainer } from "./styles"
import { useParams } from "react-router-dom"

const Aside = () => {
    const {nome} = useParams();

    return(
        <AsideContainer>
            <h2>Descubra {nome}</h2>
            <div className="content">
                        <ul>
                            <li>Artesanato</li>
                            <li>Onde comer</li>
                            <li>Engenhos</li>
                            <li>Food Park</li>
                            <li>Guia de Turismo</li>
                            <li>Onde se hospedar</li>
                            <li>Pontos Turísticos</li>
                            <li>Calendário de Eventos</li>
                        </ul>
            </div>
        </AsideContainer>
    )
}

export default Aside