import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
import solarSys from '../images/Solar_system_map.png'

export const Home = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <Section>
                <PlanetIMG src={solarSys}></PlanetIMG>
            </Section>
        </>
    )
}