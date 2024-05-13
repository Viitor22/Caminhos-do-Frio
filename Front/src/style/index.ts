'use client'
import styled, {createGlobalStyle} from "styled-components"

const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Raleway", sans-serif;
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
export const Links = styled.a`
    font-size: 22px;
    font-weight: 400;
    color: rgb(0, 0, 0);
    text-decoration: underline;
    cursor: pointer;
`
export const TextoCidade = styled.p`
    font-weight: 700;
    font-style: italic;
    color: rgb(130, 71, 49);
    text-decoration: none;
`

export default GlobalCss