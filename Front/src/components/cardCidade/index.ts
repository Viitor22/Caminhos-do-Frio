import styled from "styled-components"
import { cores } from "../../style"

export const CardDiv = styled.div`
    border: 1px solid ${cores.principal};
    position: relative;

    .card-content{
        padding: 8px;
    }

    img{
        max-width: 480px;
        width: 100%;
        max-height: 220px;
        object-fit: fill;
    }

    
    p{
        margin-bottom: 20px;
    }
`

export const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    .card-grade{
        display: flex;
        text-align: center;
        align-items: center;

        img{
            margin-left: 8px;
        }
    }
`

export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: ${cores.principal};
`
export const Button = styled.button`
    padding: 3px 6px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    color: ${cores.branco};
    background-color: ${cores.principal};
    border: solid ${cores.principal};
`