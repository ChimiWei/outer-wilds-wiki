import styled from "styled-components";
import { Link, useResolvedPath, useMatch } from "react-router-dom";


export const CustomLink = ({ link }) => {
    const resolvedPath = useResolvedPath(link.to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <StyledLink to={link.to} className={[link.id, (isActive ? "active" : "")]} path={link.to} >
            {link.name}
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    display: inline-block;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 21px 12px;

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
    &.HT {
        :hover {
            background: linear-gradient(180deg, #00000073 30%, #c45b0bb8 100%);
        }
        &.active {
            background: linear-gradient(180deg, #00000073 30%, #c45b0bb8 100%);
        }
        
    }
    &.QM {
        :hover {
            background: linear-gradient(180deg, #0f0f0f4d 0%, rgba(160,175,177,0.38699229691876746) 48%, #1d1c1c46 100%);
        }
        &.active {
            background: linear-gradient(180deg, #0f0f0f4d 0%, rgba(160,175,177,0.38699229691876746) 48%, #1d1c1c46 100%);
        }
        
    }
      
`
