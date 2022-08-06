import { Section } from "../layouts";
import { PlanetIMG } from "../components";
import GDimg from '../images/planets/Giants_Deep.png'

export const GiantsDeep = () => {
    return (
        <>
            <Section>
                <PlanetIMG alt="Giant's Deep" src={GDimg} size={30}  />
            </Section>
        </>
    )
}