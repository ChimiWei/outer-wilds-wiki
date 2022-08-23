import { Section } from "../layouts";
import { PlanetIMG, TextBox, ScifiText } from "../components";
import GDimg from '../images/planets/Giants_Deep.png'
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const GiantsDeep = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);

    return (
        <>
            <Section className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG alt="Giant's Deep" src={GDimg} size={30}  />
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