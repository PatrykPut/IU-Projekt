import styled from "styled-components"
import { FilmCard } from "./FilmCard";
import { useEffect, useState } from "react";

const CardDeckContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const CardDeck = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
    fetch('http://localhost/connection.php')
    .then((response) => response.json())
    .then(data => {
        setFilms(data);
    }) 
},[]);

    return (
        <CardDeckContainer>
            {films.map(film => (
                <FilmCard key={film.id} film={film}/>
            ))} 
        </CardDeckContainer>    
    )
}