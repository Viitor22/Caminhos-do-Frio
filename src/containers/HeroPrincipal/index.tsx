import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import alagoa from "../../assets/alagoa.jpg"
import bananeiras from '../../assets/bananeiras.jpg'
import matinhas from '../../assets/matinhas.jpeg'
import solanea from '../../assets/solanea.png'  
import { HeroContainer, ImagemCarrossel } from "./styles";

const HeroPrincipal = () => {
    return (
        <HeroContainer>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={alagoa}/>
                    <Carousel.Caption>
                        <h3>Alagoa Nova</h3>
                        <p>Iniciada em 1998, a urbanização do Parque da Lagoa foi um processo persistente e minucioso, transformando o local que, segundo historiadores, servia de descanso para tropeiros que atravessavam Alagoa Nova.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={bananeiras}/>
                    <Carousel.Caption>
                        <h3>Bananeiras</h3>
                        <p>Com seu cenário bucólico e clima ameno, é um verdadeiro refúgio para quem busca tranquilidade e contato com a natureza. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={matinhas}/>
                    <Carousel.Caption>
                        <h3>Matinhas</h3>
                        <p>
                        Situado no Sítio Sapé, município de Matinhas/PB, as ruínas do Engenho de Cana de Açúcar do Coronel Eufrásio de Arruda Câmara, foi uma fazenda escravocrata erguida no século XIX.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={solanea}/>
                    <Carousel.Caption>
                        <h3>Solânea</h3>
                        <p>
                        Existe a crença de que o braço direito de Lampião, Manoel Moreira, residiu em um casarão com mais de 60 anos de história, que também abriga um oratório utilizado como esconderijo para armas durante as incursões policiais.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </HeroContainer>
    )
}

export default HeroPrincipal;