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
                    <strong>Giant's Deep</strong> is a large aquatic planet with a deep worldwide ocean, strong gravity, swirling cyclones and a strong upwards water current. 
                    It has several islands that freely drift across the planet and are occasionally thrown into suborbital trajectories by passing cyclones.
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}