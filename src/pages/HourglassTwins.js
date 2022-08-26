import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import HTimg from '../images/planets/Hourglass_Twins.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const HourglassTwins = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Hourglass Twins" src={HTimg} size={25}  /> 
               <TextBox>
                    <ScifiText>
                   <strong>The Hourglass Twins</strong> are two planets in a binary orbit with each other.  
                    <strong> Ash Twin</strong> is a seemingly barren sand planet and <strong>Ember Twin</strong> is a rocky desert planet with an expansive cave system.
                    </ScifiText>
                    <ScifiText>
                    As time progresses, Ash Twin transfers its sand to Ember Twin, causing ancient Nomai architecture buried in Ash Twin to be revealed, 
                    while Ember Twin's cave network slowly fills with sand and becomes inaccessible.
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}