import styled from "styled-components";
import { useState } from "react";
import { LinkMenu } from "../../components";
import { HomeLink } from "../../components/homeLink";

const links = [
    {
        to: "/TimberHearth",
        name: "Timber Hearth",
        id: "TH"
    },
    {
        to: "/BrittleHollow",
        name: "Brittle Hollow",
        id: "BH"
    },
    {
        to: "/DarkBramble",
        name: "Dark Bramble",
        id: "DB"
    },
    {
        to: "/TheEye",
        name: "The Eye",
        id: "EYE"
    },
    {
        to: "/GiantsDeep",
        name: "Giant's Deep",
        id: "GD"
    },
    {
        to: "/HourglassTwins",
        name: "Hourglass Twins",
        id: "HT"
    },
    {
        to: "/QuantumMoon",
        name: "Quantum Moon",
        id: "QM"
    }
]

const homeLink = {
    to: '/'
}

export const Nav = () => {
    const [menuDrop, setMenuDrop] = useState(false);

    const isActive = menuDrop
    const handleClick = () => {
        setMenuDrop(!menuDrop)
        console.log(menuDrop)
    }
    return (
        <NavBar> 
            <HomeLink link={homeLink}></HomeLink>
            
            <LinkList>
                <LinkMenu links={links}></LinkMenu>
            </LinkList>
            <MenuDrop>
            <MenuBtn onClick={handleClick}>
                <MenuIcon className={(isActive ? "active" : "")}>   
                </MenuIcon>
            </MenuBtn>
            </MenuDrop>
            
        </NavBar>
    );
};

const NavBar = styled.nav`
    display: flex;
    
    background-color: #0000007f;
`;

const LinkList = styled.ul`
    display: flex;
`

const MenuDrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const MenuBtn = styled.button`
    --menu-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0%;
    width: var(--menu-size);
    height: var(--menu-size);  
    cursor: pointer;
   
    
`

const MenuIcon = styled.i`
   &, &:before, &:after {
    content: "";
    position: absolute;
    display: block;
    width: var(--menu-size);
    height: calc(var(--menu-size) / 15);
    background-color: white; 
    transition: all 0.5s ease-in-out;
   } 

    &:before {
    transform: translateY(-10px);
    }

    &:after {
    transform: translateY(10px);
    }

    &.active:before  {
    transform: rotate(45deg);
    }

    &.active {
        background-color: transparent;
    }

    &.active:after {
        transform: rotate(-45deg);
    }
    
`




