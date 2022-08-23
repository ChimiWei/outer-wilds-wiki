import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import EYEimg from '../images/planets/The_Eye.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const TheEye = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="The Eye" src={EYEimg} size={35}  />
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