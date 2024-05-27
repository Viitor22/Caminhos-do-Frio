import styled from "styled-components";
import { cores } from "../../style";

export const AsideContainer = styled.div`
    display: block;
    background-color: ${cores.principal};
    width: 200px;
    overflow: hidden;
    transition:all .5s;

    li{
        background-color: ${cores.principal};
        display: flex;
        justify-content: space-between;
        color: ${cores.preto};
        padding: 12px 8px;
        margin:0;
        transition:all .1s;
        font-size: 14px;
        transition:all .5s;
        text-decoration: none;
    }

    li:hover{
        background: ${cores.preto};
        transform: scale(1.05);
        color: ${cores.principal};
        box-shadow: 0 0 30px -10px ${cores.preto};
        transition:all .5s;
        cursor: pointer;
    }
}
`