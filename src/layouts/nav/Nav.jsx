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

    const isActive = menuDrop;

    const handleClick = () => {
        setMenuDrop(!menuDrop)
        console.log(menuDrop)
    }
    return (
        <NavBar> 
            
            <HomeLink link={homeLink}></HomeLink>
            
            <MenuDrop>
            <MenuBtn onClick={handleClick}>
                <MenuIcon className={(isActive ? "active" : "")}>   
                </MenuIcon>
            </MenuBtn>
            </MenuDrop>


            <LinkList className={(isActive ? "dropped" : "")}>
                <LinkMenu  links={links}></LinkMenu>
            </LinkList>
           
            
        </NavBar>
    );
};

const NavBar = styled.nav`
    
    
    background-color: #0000007f;

    @media screen and (min-width: 920px) {
        display: flex;
        
    }
`;

const LinkList = styled.ul`
    display: flex;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 920px){
        
        flex-direction: column;
        position: absolute;
        right: -30%;
        opacity: 0;
      
        &.dropped {
        
        right: 0%;
        opacity: 1;
        }
        
            
    }
`

const MenuDrop = styled.div`
    display: block;
    float: right;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 920px) {
        display: none;
    }
 `
const MenuBtn = styled.button`
    --menu-size: 30px;
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



