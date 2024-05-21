'use client'
import styled, {createGlobalStyle} from "styled-components"

export const cores = {
    principal: '#ca9738',
    branco: ' #f7eeda',
    secundario: '#f0cf9b',
    preto: '#0a0300'
}

const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Raleway", sans-serif;

        ul {
            padding: 0;
            margin: 0;
        }
    }
`

export const Titulo = styled.h1`
    font-size: 32px;
    line-height: 45px;
    font-weight: 400;
    color: #000;
`
export const Texto = styled.p`
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin-bottom: 20px;
`
export const Link = styled.a`
    display: flex;
    padding: 0px 20px;
    align-items: center;
    text-decoration: none;
    color: ${cores.preto};
    
    &:hover{
        cursor: pointer;
        color: ${cores.principal};
    }
`
export const TextoCidade = styled.p`
    font-weight: 700;
    font-style: italic;
    color: rgb(130, 71, 49);
    text-decoration: none;
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`
export const Button = styled.a`
    border: 1px solid ${cores.principal};
    display: block;
    padding: 8px 20px;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-top: 10px;
    font-weight: 700;
    color: ${cores.principal};
    transition: all ease .3s;
`

export default GlobalCss