import styled from "styled-components"
import { breakpoints } from "../../style"

export const HeroContainer = styled.div`
    height: 100vh; 
    background-size: cover;
    position absolute;

        @media (max-width: ${breakpoints.tablet}){
        max-width: auto;
        height: auto; 

        img{
            max-width: 100%;
            height: 50vh;
        }
    }
`
export const ImagemCarrossel = styled.img`
    display: block;
    width: 100%;
    height: 80vh;
`