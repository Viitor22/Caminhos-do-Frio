import styled from "styled-components";
import { cores } from "../../style";

export const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 96px;
    align-items: center;

    .content{
        display: flex;
        margin-left: 30%;

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