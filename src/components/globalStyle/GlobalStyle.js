import { createGlobalStyle } from "styled-components";
import space from '../../images/space.png'

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Fira Sans', sans-serif;
        background-image: url(${space});
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
`