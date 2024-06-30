import styled from "styled-components";
import { breakpoints } from "../../style";

export const CidadeContainer = styled.div`
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 0.3fr 1.5fr 1fr;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: 1fr;
    }

    img{
        max-width: 400px;
        height: 100%;

        @media (max-width: ${breakpoints.tablet}){
            max-height: 400px;
            margin-left: 16px;
        }
    }
`
export const Div = styled.div`
    width: 250px;

    @media (max-width: ${breakpoints.tablet}){
        display: none;
    }
`
