import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import BHpic from '../images/planets/Brittle_Hollow.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";

export const BrittleHollow = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Brittle Hollow" src={BHpic} size={30}/>
            </Section>
        </>
    )
}