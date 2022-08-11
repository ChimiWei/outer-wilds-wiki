import styled from "styled-components";
import { LinkMenu } from "../../components";
import { HomeLink } from "../../components/homeLink";
import { CustomLink } from "../../components/customLink";

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
    },
    {
        to: "/TimberHearth",
        name: "Timber Hearth",
        id: "TH"
    }
]

const homeLink = {
    to: '/'
}

export const Nav = () => {
    return (
        <NavBar> 
            <HomeLink link={homeLink}></HomeLink>
            
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




