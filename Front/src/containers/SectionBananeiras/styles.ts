import styled from "styled-components";
import { cores } from "../../style";

export const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${cores.branco};

    .text {
        flex: 1;
        font-size: 25px;
        padding-top: 5%; 
    }

    .images img {
        max-width: 70%;
        height: auto; 
        width: 180%;
        margin-bottom: 0%;
        margin-left: 25%;
        margin-top: 10%;
    }

    .images {
        flex: 1; 
    }

    .logo {
        position: absolute;
    }
`