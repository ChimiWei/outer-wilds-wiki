import styled from "styled-components";
import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
import solarSys from '../images/Solar_system_map.png'

export const Home = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <Test>
                oi
            </Test>
        </>
    )
}


const Test = styled(Section)`
    background: url(${solarSys}) no-repeat;
    background-size: 100% auto;
    width: 80%;
    height: 55vw;
    margin: auto;
`