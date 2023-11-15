import { useContext } from "react";
import styled from "styled-components";
import { FilmContext } from "../Context/FilmContext";
import { Filter } from "./FilterDropdown";



const NavbarContainer = styled.div`
background-image: linear-gradient(to right, rgba(70,130,180,1) 0%, rgba(85,140,195,1) 20%, rgba(100,149,237,1) 40%, rgba(75,175,210,1) 50%, rgba(64,224,208,1) 60%, rgba(0,191,255,1) 80%, rgba(70,130,180,1) 100%);    height: 7%;
    width: 100%;
    top: 10vh;
    display: flex;
    border-radius: 5px;
    border-width: 10px;
    border-color: black;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    align-items: center;
    opacity: 1;
    box-shadow: 0px 5px 15px rgba(1, 1, 1, 1);
`;



const Search = styled.input`
    width: 50%;
    background-color: white;
    border: solid black 1px;
    padding: 0.5%;
    border-radius: 20px;
    transition: 0.5s; 
    height:30%;
    

    &:hover {

        transform: scale(1.01);
    }
    
`;

const NewFilmButton = styled.button`
    background-color: #e6e6e6;
    border: solid 1px #e6e6e6;
    padding: 1%;
    border-radius: 10px;
    width: 10%;
    font-family: 'Arial';    
    cursor: pointer;
    transition: all 0.3s ease-in-out; 
    margin-right: 2vw; 
    box-shadow: 0px 5px 15px rgba(1, 1, 1, 1);
    text-shadow: 1px 1px 1px black;
    height: 30%;
    align-items: center;
    

    &:hover {
        background-color: #4a4aff;
        color: white;
        transform: scale(1.1);
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