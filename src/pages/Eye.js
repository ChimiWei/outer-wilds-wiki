import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import EYEimg from '../images/planets/The_Eye.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const TheEye = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="The Eye" src={EYEimg} size={35}  />
            </Section>
        </>
    )
}