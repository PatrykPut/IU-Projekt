import styled from "styled-components";  
  
const FilmCardContainer = styled.div`
    perspective: 1500px;
    transform-style: preserve-3d;
    height: 100%;
    position: relative;
    transition: transform 0.4s;
`;

const FilmCardWrapper = styled.div`
    width: 20vw;
    height: 30vh;
    perspective: 1000px;
    margin-top: 3vh;
    margin-left: 3.5vw;
    &:hover ${FilmCardContainer} {
      transform: rotateY(180deg);
    }
`;

const FilmCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: white solid 1px ;
    border-radius: 3vh;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 20px;
    cursor: pointer;
    backface-visibility: hidden;
    overflow: hidden;
    background-color: white;
`;

const FilmCardBack = styled(FilmCardFront)`
    transform: rotateY(180deg);
`;
  
export const FilmCard = ({film}) => {  
    return (  
        <FilmCardWrapper>  
            <FilmCardContainer>  
                <FilmCardFront>  
                    <h3>{film.name}</h3>  
                    <p>Release Year: {film.releaseYear}</p>  
                    <p>Director: {film.director}</p>  
                    <p>Duration: {film.duration}</p>  
                </FilmCardFront>  
                <FilmCardBack>  
                    <p>{film.description}</p>  
                </FilmCardBack>  
            </FilmCardContainer>  
        </FilmCardWrapper>  
    )  
}  