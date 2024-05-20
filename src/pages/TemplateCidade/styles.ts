import styled from "styled-components";

export const TemplateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fdefd3;

    .title {

    }

    .text {
        flex: 1;
        font-size: 25px;
        padding-top: 15%; 
    }

    .images img {
        max-width: 70%;
        height: auto; 
        width: 180%;
        margin-bottom: 0%;
        margin-left: 25%;
        margin-right: 0;
    }

    .images {
        flex: 1; 
    }
`
export const TituloCidade = styled.h2`
    font-weight: 400;
    font-style: normal;
    color: rgb(223, 184, 122);
    text-decoration: none;
`