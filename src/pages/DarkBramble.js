import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import DBimg from '../images/planets/Dark_Bramble.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const DarkBramble = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Dark Bramble" src={DBimg} size={30}  /> 
            </Section>
        </>
    )
}