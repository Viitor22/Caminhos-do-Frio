import styled from "styled-components";
import { Texto, breakpoints, cores } from "../../style/index.ts";

export const FooterContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 32px 32px 0 32px;
    justify-content: space-between;
    background-color: ${cores.branco};

    @media (max-width: ${breakpoints.tablet}){
        display: flex;
        justify-content: center;
    }

    .redes {
        display: flex;
        justify-content: flex-end;
        font-size: 32px;
        width: 250px;

        @media (max-width: ${breakpoints.tablet}){
            justify-content: center;
            width: 100%;
        }
    }

    .texto {
        max-width: 250px;
        p{
            margin: 0;
        }

        @media (max-width: ${breakpoints.tablet}){
            max-width: 1000px;
            width: 100%;
        }
    }
`
export const TextFooter = styled(Texto)`
    text-align: center;
    max-width: 680px;
    margin-top: 60px;
    padding: 0;
    font-size: 10px;
`
