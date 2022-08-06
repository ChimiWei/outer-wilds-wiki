import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import BHpic from '../images/planets/Brittle_Hollow.jpg'
export const BrittleHollow = () => {
    return (
        <>
            <Section>
                <PlanetIMG alt="Brittle Hollow" src={BHpic} size={50}/>
            </Section>
        </>
    )
}