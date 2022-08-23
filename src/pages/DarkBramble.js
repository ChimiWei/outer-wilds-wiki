import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import DBimg from '../images/planets/Dark_Bramble.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const DarkBramble = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
               <PlanetIMG alt="Dark Bramble" src={DBimg} size={30}  /> 
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