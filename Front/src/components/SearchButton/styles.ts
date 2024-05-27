import styled from "styled-components"
import { cores } from "../../style"

export const SearchButtonContainer = styled.div`
    width: 105px;
`

export const BarraPesquisa = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
    position: relative;
    max-height: 32px;
    padding: 15px 40px 15px 20px;
    width: 200px;
    color: ${cores.preto};
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    border: 1px solid ${cores.preto};
    border-radius: 5px;
    background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
    transition: width 0.4s ease
    outline: none;
    
    &:focus{ 
        width: 300px; 
        }
    }

    i{
    position: relative;
    color: ${cores.principal};
    font-size: 16px;
    }
`
export const SearchButtonA = styled.a`
    cursor: pointer;
    background-color: ${cores.branco};
    color: ${cores.preto};

    &:hover i{
        color: ${cores.principal};
    }
`