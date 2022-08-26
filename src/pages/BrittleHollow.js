import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import BHpic from '../images/planets/Brittle_Hollow.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";

export const BrittleHollow = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Brittle Hollow" src={BHpic} size={30}/>
                <TextBox>
                    <ScifiText>
                    <strong>Brittle Hollow</strong> is a hollow rocky planet with a black hole at the core, 
                    with many structures embedded across both the surface and the underside of its fragile crust. 
                    </ScifiText>
                    <ScifiText>
                    As time progresses, bombardment from the planet's moon, <strong>Hollow's Lantern</strong>, 
                    causes large chunks of the planet to break off and fall through the black hole, 
                    emerging from the white hole at the system's outskirts.
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}