import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import THimg from '../images/planets/Timber_Hearth.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const TimberHearth = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Timber Hearth" src={THimg} size={30}  /> 
            </Section>
        </>
    )
}