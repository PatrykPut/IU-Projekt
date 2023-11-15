import { useContext } from "react";
import styled from "styled-components";
import { FilmContext } from "../Context/FilmContext";
import { Filter } from "./FilterDropdown";

const NavbarContainer = styled.div`
    background-image: linear-gradient(white, lightgrey);
    height: 7%;
    width: 100%;
    top: 10vh;
    display: flex;
    border-radius: 5px;
    border-width: 10px;
    border-color: black;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
`;

const Search = styled.input`
    width: 10vw;
    background-color: white;
    border: solid black 1px;
    padding: 10px;
    border-radius: 10px;
    width: 20vw;
    transition: 0.5s; 
    width: 10vw; 
`;

const NewFilmButton = styled.button`
    background-color: #e6e6e6;
    border: solid 1px #e6e6e6;
    padding: 10px;
    border-radius: 10px;
    width: 20vw;
    cursor: pointer;
    transition: 0.5s; 
    width: 10vw;
    margin-right: 2vw; 

    &:hover {
        background-color: #4a4aff;
        color: white;
    }
`;

export const Navbar = () => {

    const { searchTerm, setSearchTerm, setShowFilmSurvey } = useContext(FilmContext);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <NavbarContainer>
        <Filter/>
        <Search placeholder="Search" value={searchTerm} onChange={handleSearchChange}></Search>
        <NewFilmButton onClick={() => setShowFilmSurvey(true)}>
            Enter New Film
        </NewFilmButton>
        </NavbarContainer>
    )
}