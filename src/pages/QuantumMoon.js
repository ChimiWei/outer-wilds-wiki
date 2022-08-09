import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import QMimg from '../images/planets/Quantum_Moon.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";

export const QuantumMoon = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Quantum Moon" src={QMimg} size={24}  />
            </Section>
        </>
    )
}