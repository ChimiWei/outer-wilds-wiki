import styled from "styled-components";

export const PlanetIMG = styled.img`
    max-width: ${props => props.size}vw;
    animation: rotate 333s linear infinite;
    -webkit-animation: rotate 333s linear infinite;
  @keyframes rotate {
    from {
     -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
}
` 