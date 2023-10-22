import styled from "styled-components";

const FilmCardContainer = styled.div`
    width: 200px;
    height: 150px;
    border: solid black 1px;
    border-radius: 20px;
    margin-right: 20px;
    margin-top: 20px;
`;


export const FilmCard = ({film}) => {

    return (
        <FilmCardContainer>
                <h2>{film.name}</h2>
                <p>Release Year: {film.releaseYear}</p>
                <p>Director: {film.director}</p>
                <p>Duration: {film.duration}</p>
                
        </FilmCardContainer>
    )
}
