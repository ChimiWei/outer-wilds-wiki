import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import EYEimg from '../images/planets/The_Eye.png'

export const TheEye = () => {
    return (
        <>
            <Section>
                <PlanetIMG alt="The Eye" src={EYEimg} size={35}  />
            </Section>
        </>
    )
}