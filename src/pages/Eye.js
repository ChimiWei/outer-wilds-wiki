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
                    The <strong>Eye of the Universe</strong> is a planetary object older than the universe itself which is in a distant orbit around the Sun.
                    It is a highly quantum object, being made of the same unknown quantum material that the various <strong>Quantum Shards</strong> are made of.
                    </ScifiText>
                    <ScifiText>
                    Visually, the <strong>Eye</strong> looks like a dark planet with a purple storm surrounding it. 
                    Occasional lightning strikes can be observed as well. 
                    Strange branches fan out from the planet into the storm. 
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}