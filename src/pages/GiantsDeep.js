import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import GDimg from '../images/planets/Giants_Deep.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const GiantsDeep = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Giant's Deep" src={GDimg} size={30}  />
            </Section>
        </>
    )
}