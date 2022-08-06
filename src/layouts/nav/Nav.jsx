import styled from "styled-components";
import { LinkMenu } from "../../components";
import OWLogo from "../../images/outer-wilds-logo.png"
import { Link } from "react-router-dom";

const links = [
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

export const Nav = () => {
    return (
        <NavBar> 
            <Link to="/"><LogoImg alt="Outer Wilds" src={OWLogo}/></Link>
            
            <LinkList>
                <LinkMenu links={links}></LinkMenu>
            </LinkList>
            
            
        </NavBar>
    );
};

const NavBar = styled.nav`
    display: flex;
    overflow: hidden;
    background-color: #0000007f;
`;

const LinkList = styled.ul`
    display: flex;
`

const LogoImg = styled.img`
    max-width: 6vw;
    padding: 10px 15px;
`





