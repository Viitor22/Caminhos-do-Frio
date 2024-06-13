import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import remigio from '../../assets/carrossel/remigio1-carrossel.png'
import areia from '../../assets/carrossel/areia-carrossel.png' 
import bananeiras from '../../assets/carrossel/bananeiras-carrossel.png' 
import solanea from '../../assets/carrossel/solanea-carrossel.png' 
import matinhas from '../../assets/carrossel/matinhas-carrossel.png'
import borborema from '../../assets/carrossel/borborema1-carrossel.png'
import alagoaNova from '../../assets/carrossel/alagoaNova-carrossel.png'
import serraria from '../../assets/carrossel/serraria-carrossel.png'
import alagoaGrande from '../../assets/carrossel/alagoa-grande-carrossel.png'
import piloes from '../../assets/carrossel/piloes-carrossel.png' 

import { HeroContainer, ImagemCarrossel } from "./styles";

const HeroPrincipal = () => {
    return (
        <HeroContainer>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={bananeiras}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={alagoaGrande}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={matinhas}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={solanea}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={borborema}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={alagoaNova}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={serraria}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={remigio}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={piloes}/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <ImagemCarrossel src={areia}/>
                </Carousel.Item>
            </Carousel>
        </HeroContainer>
    )
}

export default HeroPrincipal;