import styled from "styled-components"
import { cores } from "../../style"

export const HeaderLogo = styled.div`
    position: relative;
    justify-content: center;
    aling-items: center;
    top: 0;
    left: 0;
`

export const Arrow = styled.div`
    display: none;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${cores.branco};
    position: absolute;
    right: 42%;
    top: 64%;
`

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 60%;
    right: -80%;
    background-color: ${cores.branco};
    width: 200px;
    border-radius: 4px;
    box-shadow: 0 0 40px -10px ${cores.preto};
    margin-top: 12px;
    overflow: hidden;
    transition:all .5s;

    li{
        background-color: ${cores.branco};
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