import styled from "styled-components";
import { breakpoints, cores } from "../../style";

export const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 96px;
    align-items: center;
    background-color: ${cores.branco};
    z-index: 1;

    @media (max-width: ${breakpoints.tablet}){
        padding: 0 24px;
    }

    .content{
        display: flex;

        .links{
            display: flex;
        }

        .hover{
        display: flex;
        padding: 0px 20px;
        align-items: center;
        position: relative;
            &:hover{
                .dropdown-content{
                    display: block;
                    z-index: 2;
                }
            }
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