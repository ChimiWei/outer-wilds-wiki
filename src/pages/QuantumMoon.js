import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import QMimg from '../images/planets/Quantum_Moon.png'

export const QuantumMoon = () => {
    return (
        <>
            <Section>
                <PlanetIMG alt="Quantum Moon" src={QMimg} size={30}  />
            </Section>
        </>
    )
}