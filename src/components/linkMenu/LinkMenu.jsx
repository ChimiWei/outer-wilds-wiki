import styled from "styled-components";
import { Link } from "react-router-dom";




export const LinkMenu = ({ links }) => {
    return (
        <>
            {links.map(link => (<li><CustomLink to={link.to} className={link.id} key={link.id}>{link.name}</CustomLink></li>))}
        </>
    )
}

const CustomLink = styled(Link)`
    display: inline-block;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 21px 12px;

    &.BH:hover {
        background-color: #80008053;
    }

    &.DB:hover {
        background-color: #c4939352;
    }
    &.EYE:hover {
        background-color: #d240ff52;
    }
    &.GD:hover {
        background-color: #51f18e52;
    }
    &.HT:hover {
        background: linear-gradient(90deg, #a8a06773 0%, #b64f00a6 100%);
    }
    &.QM:hover {
        background: linear-gradient(90deg, #0f0f0f4d 0%, rgba(160,175,177,0.38699229691876746) 48%, #1d1c1c46 100%);
    }
    
    
    
    
    
`

