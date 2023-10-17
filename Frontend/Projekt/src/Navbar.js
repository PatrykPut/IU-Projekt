import styled from "styled-components";

const NavbarContainer = styled.div`
    background-color: lightgreen;
    height: 50px;
    width: 100vw;
    display: flex;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-width: 10px;
    border-color: black;
    justify-content: space-between;
`;

export const Navbar = () => {
    return (
        <NavbarContainer>
        <span>Filter</span>
        <span>Home</span>
        <span>Suche</span>
        <span>Whatever</span>
        <span >Spinning fish</span>
        </NavbarContainer>
    )
}