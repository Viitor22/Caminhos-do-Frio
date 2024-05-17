import styled from "styled-components";
import { cores } from "../../style";

export const HeaderNav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 96px;
    align-items: center;
    background-color: ${cores.branco};

    .content{
        display: flex;

        .links{
            display: flex;
        }
    }
`
export const HeaderButton = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid ${cores.preto};
    display: inline-block;
    max-height: 32px;
    cursor: pointer;
    color: ${cores.preto};
    font-size: 16px;
    padding: 5px 30px;
    text-decoration: none;
    transition: .5s;

    &:hover{
        background-color: ${cores.preto};
        color: ${cores.principal}
    }
`
export const Link = styled.a`
    display: flex;
    padding: 0px 20px;
    align-items: center;
    
    &:hover{
        cursor: pointer;
        color: ${cores.principal};
    }
`
export const HeaderLogo = styled.div`
    position: relative;
    justify-content: center;
    aling-items: center;
    top: 0;
    left: 0;
`
export const BarraPesquisa = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
    position: relative;
    padding: 15px 40px 15px 20px;
    width: 200px;
    color: ${cores.preto};
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
    border: 1px solid ${cores.preto};
    border-radius: 5px;
    background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
    transition: width 0.4s ease;
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
export const SearchButton = styled.a`
    cursor: pointer;
    background-color: ${cores.branco};
    color: ${cores.preto};

    &:hover i{
        color: ${cores.principal};
    }
`