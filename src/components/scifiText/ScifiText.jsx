import styled from "styled-components";


export const ScifiText = styled.p`
    padding: 0px 8px 20px 15px;
    text-indent: -1.1em;
    &:before {
        content: "— ";
        color: #7b9ad3fc;
    }

    @media screen and (max-width: 920px) {
        font-size: 0.8em;
    }
`
