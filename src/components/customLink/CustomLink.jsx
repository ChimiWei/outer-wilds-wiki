import styled from "styled-components";
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";
import { useCallback, useContext } from "react";
import { FadeOutContext } from "../../app/App";


export const CustomLink = ({ link }) => {
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
        <StyledLink   className={[link.id, (isActive ? "active" : "")]} onClick={handleOnClick} >
            {link.name}
        </StyledLink>
    )
}

const StyledLink = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 21px 12px;
    transition: all 0.4s ease-in-out;
    animation: fadeIn 3s;

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

    &.BH {
        :hover {
            background-color: #80008053;
        }

        &.active {
            background-color: #80008053;
        }
        
    }

    &.DB {
        :hover {
            background-color: #c4939352;
        }
        &.active {
            background-color: #c4939352;
        }
        
    }
    &.EYE {
        :hover {
            background-color: #d240ff52;
        }
        &.active {
            background-color: #d240ff52;
        }
        
    }
    &.GD {
        :hover {
            background-color: #51f18e52;
        }
        &.active {
            background-color: #51f18e52;
        }
        
    }
    &.TH {
        :hover {
            background-color: #71f15152;
        }
        &.active {
            background-color: #71f15152;
        }
        
    }
    &.HT {
        :hover {
            background: #c45b0b7a;
        }

        &.active {
            background: linear-gradient(180deg, #00000073 30%, #c45b0bb8 100%);
        }
    }
        
    &.QM {
        :hover {
            background: #8080807a;
        }
        &.active {
            background: linear-gradient(180deg, #0f0f0f4d 0%, rgba(160,175,177,0.38699229691876746) 48%, #1d1c1c46 100%);
        }
        
    }
      
`
