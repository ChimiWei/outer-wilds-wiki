import styled from "styled-components";
import { Section } from "../layouts";
import { ScifiText, TextBox } from "../components";
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
import solarSys from '../images/Solar_system_map.png'

export const Home = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <HomeSection className={fadeOut ? 'fade-out' : ''}>
                <TextBox>
                    <ScifiText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo viverra, 
                    commodo enim sit amet, rutrum orci. 
                    Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas
                    </ScifiText>
                </TextBox>
                <TextBox>
                    <ScifiText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo viverra, 
                    commodo enim sit amet, rutrum orci. 
                    Pellentesque habitant morbi tristique senectus et netus et 
                    malesuada fames ac turpis egestas
                    </ScifiText>
                </TextBox>
            </HomeSection>
        </>
    )
}


const HomeSection = styled(Section)`
    justify-content: space-around;
    background: url(${solarSys}) no-repeat;
    background-size: 100% auto;
    width: 80%;
    height: 55vw;
    margin: auto;
`