import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import DBimg from '../images/planets/Dark_Bramble.png'

export const DarkBramble = () => {
    return (
        <>
            <Section>
               <PlanetIMG alt="Dark Bramble" src={DBimg} size={30}  /> 
            </Section>
        </>
    )
}