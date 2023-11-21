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
    height: 35vh;
    perspective: 1000px;
    margin-top: 3vh;
    margin-left: 3.5vw;
    box-sizing: border-box;

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
    box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
`;

const FilmCardBack = styled(FilmCardFront)`
    transform: rotateY(180deg);
`;

const Star = styled.span`
    font-size: 25px;
`;

const AverageRating = (ratings) => {
    if(ratings && ratings.length) {
        const sum = ratings.reduce((a, b) => a + parseFloat(b.rating), 0);
        const average = sum / ratings.length;
        const roundedAverage = Math.round(average);
        return roundedAverage;
    }
    return 0;
}
  
export const FilmCard = ({film}) => {  

    const averageRating = AverageRating(film.ratings);

    const stars = [];
    for(let i = 0; i < 5; i++) {
        if(i < averageRating) {
            stars.push(<Star key={i} style={{color: '#f3e03b'}}>{"★"}</Star>)
        }
        else {
            stars.push(<Star key={i}>{"☆"}</Star>)
        }
    }

    return (  
        <FilmCardWrapper>  
            <FilmCardContainer>  
                <FilmCardFront>  
                    <h4>{film.name}</h4>  
                    <p>Release Year: {film.releaseYear}</p>
                    <p>Director: {film.director}</p>  
                    <p>Duration: {film.duration} min</p>  
                    <div> 
                        {stars}
                    </div>  
                </FilmCardFront>  
                <FilmCardBack>  
                    <p>{film.description}</p>  
                </FilmCardBack>  
            </FilmCardContainer>  
        </FilmCardWrapper>  
    )  
}  