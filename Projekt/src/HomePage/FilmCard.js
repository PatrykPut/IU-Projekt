import styled from "styled-components";  
  
const FilmCardContainer = styled.div`
    perspective: 1500px;
    transform-style: preserve-3d;
    height: 100%;
    position: relative;
    transition: transform 0.4s;
    color: black;
`;

const FilmCardWrapper = styled.div`
    width: 20vw;
    height: 30vh;
    perspective: 1000px;
    margin-top: 3vh;
    margin-left: 3.5vw;
    box-sizing: border-box;
    &:hover ${FilmCardContainer} {
      transform: rotateY(180deg);

    }
`;

const FilmCardFront = styled.div`
    background-image: linear-gradient(to right, rgba(70,130,180,0.2) 0%, rgba(85,140,195,0.2) 20%, rgba(100,149,237,0.2) 40%, rgba(75,175,210,0.2) 50%, rgba(64,224,208,0.2) 60%, rgba(0,191,255,0.2) 80%, rgba(70,130,180,0.2) 100%);    height: 7%;
    position: absolute;
    font-weight:bold;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;
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
    box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
`;

const FilmCardBack = styled(FilmCardFront)`
    transform: rotateY(180deg);
`;

const Image = styled.img`
    height: auto;
    width: 100%;
    animation-duration: 2s;
`;
  
export const FilmCard = ({film}) => {  
    return (  
        <FilmCardWrapper>  
            <FilmCardContainer>  
                <FilmCardFront>  
                    <h4>{film.name}</h4>  
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