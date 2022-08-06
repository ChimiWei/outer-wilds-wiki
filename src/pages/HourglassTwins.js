import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import HTimg from '../images/planets/Hourglass_Twins.png'

export const HourglassTwins = () => {
    return (
        <>
            <Section>
               <PlanetIMG alt="Hourglass Twins" src={HTimg} size={25}  /> 
            </Section>
        </>
    )
}