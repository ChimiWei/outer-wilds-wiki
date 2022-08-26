import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import QMimg from '../images/planets/Quantum_Moon.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";

export const QuantumMoon = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Quantum Moon" src={QMimg} size={30}  />
                <TextBox>
                    <ScifiText>
                    The <strong>Quantum Moon</strong> is a mysterious moon with macroscopic quantum properties, 
                    appearing in orbit around different planets and vanishing when unobserved. 
                    Unreachable by normal means, landing on the Quantum Moon is a mystery unto itself.
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}