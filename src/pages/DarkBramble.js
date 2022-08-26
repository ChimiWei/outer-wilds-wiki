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
                    <strong>Dark Bramble</strong> is a frozen malevolent mass of twisted vines, foggy rooms and a confusing portal network that warps conventional spacetime, 
                    inhabited by hostile <strong>Anglerfish</strong>. 
                    </ScifiText>

                    <ScifiText>
                    It was originally an ocean planet before being infected with dark and twisted vines that tore the planet apart.
                    </ScifiText>
                </TextBox>
            </Section>
        </>
    )
}