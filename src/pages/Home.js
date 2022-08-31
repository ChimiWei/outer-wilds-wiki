import styled from "styled-components";
import { Section } from "../layouts";
import { ScifiText, TextBox, PlanetIMG } from "../components";
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
import solarSys from '../images/Solar_system_map.png'

export const Home = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <HomeSection className={fadeOut ? 'fade-out' : ''}>
                <PlanetIMG src={solarSys} size={60}>

                </PlanetIMG>
                <TextBox>
                    <ScifiText>
                    The <strong>Solar System</strong>, also referred as <strong>Outer Wilds</strong>. 
                    At the centre of the solar system is the <strong>Sun</strong> orbited by five planets
                    and numerous other astronomical bodies. When reaching the end of its life cycle,
                    the star grows before eventually collapsing under its own gravity and exploding in a violent Supernova.
                    </ScifiText>
                    <ScifiText>
                    The system was discovered by the <strong>Nomai</strong> civilization on their search for the Eye,
                    and in the middle of their research the orbit was infected by an extremely hazardous substance called <strong>Ghost Matter</strong>,
                    ending all Nomai life within the solar system.
                    </ScifiText>
                </TextBox>
            </HomeSection>
        </>
    )
}


const HomeSection = styled(Section)`

    background-size: 100% auto;
    width: 80%;
    height: fit-content;
    margin: auto;

    @media screen and (max-width: 920px) {
        
    }
`