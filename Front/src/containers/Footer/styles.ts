import styled from "styled-components";
import { Texto, cores } from "../../style/index.ts";

export const FooterContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 32px 32px 0 32px;
    justify-content: space-between;
    background-color: ${cores.branco};

    .redes {
        display: flex;
        justify-content: flex-end;
        font-size: 32px;
        width: 250px;
    }

    .texto {
        max-width: 250px;
        p{
            margin: 0;
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
export const FooterLogo = styled.div`
    position: relative;
    justify-content: center;
    aling-items: center;
    top: 0;
    left: 0;
`