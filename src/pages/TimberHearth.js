import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import THimg from '../images/planets/Timber_Hearth.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const TimberHearth = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Timber Hearth" src={THimg} size={30}  /> 
               <TextBox>
                    <ScifiText>
                    A lush forest planet and home planet of the <strong>Hearthians</strong>. 
                    It features expansive grass plains and a large network of submerged caverns,
                     with many geysers providing openings. 
                    There are also numerous large craters and tall mountains scattered across the surface. 
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}