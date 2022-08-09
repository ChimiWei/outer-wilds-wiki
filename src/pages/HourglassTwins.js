import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import HTimg from '../images/planets/Hourglass_Twins.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const HourglassTwins = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Hourglass Twins" src={HTimg} size={25}  /> 
            </Section>
        </>
    )
}