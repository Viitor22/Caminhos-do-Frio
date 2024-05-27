import styled from "styled-components";
import { cores } from "../../style";

export const CardTurismoMain = styled.main`
    padding: 20px 30px;

    .contato{
        display: grid;
        grid-template-columns: 1.2fr 1fr;

        h2 {
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            color: ${cores.principal};
            margin: 10px 0 5px;
        }
    }
`

export const TituloCard = styled.h1`
font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: ${cores.principal};
    margin: 0;
`

export const SpanSeparator = styled.span`
    display: block;
    height: 3px;
    width: 66px;
    background-color: ${cores.principal};
    margin: 10px 0;
`

