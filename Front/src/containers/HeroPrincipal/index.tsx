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
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={bananeiras}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={matinhas}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={solanea}/>
                </Carousel.Item>
            </Carousel>
        </HeroContainer>
    )
}

export default HeroPrincipal;