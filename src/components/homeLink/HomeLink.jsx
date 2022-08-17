import styled from "styled-components";
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";
import { useCallback, useContext } from "react";
import { FadeOutContext } from "../../app/App";
import OWLogo from "../../images/outer-wilds-logo.png"


export const HomeLink = ({ link }) => {
    const resolvedPath = useResolvedPath(link.to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const navigate = useNavigate();
    const delayedNavigate = useCallback(() => setTimeout(() => {navigate(link.to, {replace: true}), [navigate]}, 1000));
    const handleOnClick = () => {
        if(isActive) return
        delayedNavigate()
        setFadeOut(true)
        console.log(fadeOut)
    }

    
    const {fadeOut, setFadeOut}= useContext(FadeOutContext)

    return (
        <StyledLink  onClick={handleOnClick} >
            <LogoImg alt="Outer Wilds" src={OWLogo}/>
        </StyledLink>
    )
}

const StyledLink = styled.a`
    transition: all 0.4s ease-in-out;
    animation: fadeIn 3s;

    @media screen and (max-width: 920px) {
        float: none;
        display: inline-block;

    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    :hover {
        cursor: pointer;
    }

      
`

const LogoImg = styled.img`
    max-width: 6vw;
    padding: 10px 15px 0px;

    @media screen and (max-width: 920px) {
        max-width: 10vw;
    }
    
`


