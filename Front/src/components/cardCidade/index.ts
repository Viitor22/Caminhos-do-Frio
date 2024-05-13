import styled from "styled-components"

export const CardContainer = styled.div`
    max-height: 410px;
    max-width: 115px;
    margin-bottom: 150px;

    img{
        max-width: 130px;
        height: 180px;
        object-fit: cover;
    }

    span {
        display: flex;
        max-width: 130px;
        text-justify: center;
        justify-content: center;

        a {
            display: flex;
            width: 100%;
            max-width: 130px;
            align-items: center;
            justify-content: center;
            padding-left: 18px;
        }
    }
`