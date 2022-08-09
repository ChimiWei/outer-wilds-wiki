import { Section } from "../layouts";
import { FadeOutContext } from "../app/App";
import { useContext } from "react";
export const Home = () => {
    const { fadeOut, setFadeOut} = useContext(FadeOutContext);
    
    return (
        <>
            <Section>
                oi
            </Section>
        </>
    )
}