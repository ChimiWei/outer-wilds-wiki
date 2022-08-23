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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo viverra, 
                    commodo enim sit amet, rutrum orci. 
                    Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}