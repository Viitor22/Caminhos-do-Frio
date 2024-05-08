import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fdefd3;

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