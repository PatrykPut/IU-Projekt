import { useContext } from "react";
import styled from "styled-components";
import { FilmContext } from "./FilmContext";

const NavbarContainer = styled.div`
    background-color: lightgreen;
    height: 7vh;
    width: 100%;
    top: 15vh;
    display: flex;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-width: 10px;
    border-color: black;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
`;

const Filter = styled.select`
    width: 10vw;
    height: 50%;
`;

const Search = styled.input`
    width: 10vw;
    height: 50%;
`;

export const Navbar = () => {

    const { searchTerm, setSearchTerm, sortOption, setSortOption } = useContext(FilmContext);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSort = (e) => {
        setSortOption(e.target.value);
    }

    return (
        <NavbarContainer>

        <Filter value={sortOption} onChange={handleSort}>
            Filter
            <option selected disabled hidden>Sort</option>
            <option value="default">Default</option>
            <option value="releaseYear">Release Year</option>
            <option value="duration">Duration</option>
            <option value="mostRatings">Most Ratings</option>
            <option value="bestRatings">Best Ratings</option>
        </Filter>
        <Search placeholder="Search" value={searchTerm} onChange={handleSearchChange}></Search>
        </NavbarContainer>
    )
}