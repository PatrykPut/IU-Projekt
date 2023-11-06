import styled from "styled-components"
import { FilmCard } from "./FilmCard";
import { useContext, useEffect, useState } from "react";
import { FilmContext } from "./FilmContext";

const CardDeckContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;

export const CardDeck = () => {

    const [films, setFilms] = useState([]);

    const { searchTerm, sortOption } = useContext(FilmContext);

    useEffect(() => {
    fetch('http://localhost/IUProjekt/Projekt/src/connection.php')
    .then((response) => response.json())
    .then(data => {
        setFilms(data);
    }) 
},[]);

    const sortedFilms = [...films].sort((a, b) => {
        switch (sortOption) {
            case 'releaseYear':
                return b.releaseYear - a.releaseYear;

            case 'duration':
                return b.duration - a.duration;
                
            default: 
                return 0;
        }
    })

    const filteredFilms = sortedFilms.filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <CardDeckContainer>
            {filteredFilms.map(film => (
                <FilmCard key={film.id} film={film}/>
            ))} 
        </CardDeckContainer>    
    )
}