import styled from "styled-components"
import { FilmCard } from "./FilmCard";
import { useContext, useEffect, useState } from "react";
import { FilmContext } from "../Context/FilmContext";
import { Link } from "react-router-dom";
import { InsertNewFilm } from "./InsertNewFilm";

const CardDeckContainer = styled.div`
    top: 18vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    `;

export const CardDeck = () => {

    const [films, setFilms] = useState([]);

    const { searchTerm, sortOption } = useContext(FilmContext);

    useEffect(() => {

    fetch('http://localhost/IUProjekt/Projekt/src/HomePage/CardDeck.php')

    .then((response) => response.json())
    .then(data => {
        console.log(data);
        setFilms(data);
    }) 
},[]);

    const sortedFilms = [...films].sort((a, b) => {
        switch (sortOption) {
            case 'releaseYear':
                return b.releaseYear - a.releaseYear;

            case 'duration':
                return b.duration - a.duration;

            case 'mostRatings':    
                return b.ratings.length - a.ratings.length;

            case 'bestRatings':
                 const avgRatingA = a.ratings.reduce((acc, cur) => acc + cur.rating, 0) / a.ratings.length || 0;    
                 const avgRatingB = b.ratings.reduce((acc, cur) => acc + cur.rating, 0) / b.ratings.length || 0;
                 return avgRatingB - avgRatingA;    

            default: 
                return 0;
        }
    })

    const filteredFilms = sortedFilms.filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <CardDeckContainer>
            {filteredFilms.map(film => (
                <Link to={`/${film.id}`} key={film.id}>
                <FilmCard  film={film}/>
                </Link>
            ))} 
            <InsertNewFilm/>
        </CardDeckContainer>    
    )
}