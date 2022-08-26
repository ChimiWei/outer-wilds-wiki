import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 100px 40px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 4vw;
    background-color: black;
    @media screen and (max-width: 660px){
        height: 8vw;
    }
`