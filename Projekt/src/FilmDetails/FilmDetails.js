import styled from "styled-components"; 
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { InsertNewRating } from "./InsertNewRating";
import { FilmContext } from "../Context/FilmContext";

const CentralBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  border-right: solid black 2px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  align-items: center;
  border-left: solid black 2px;
`;

const MainContainer = styled.div`
  position: relative;
  top: 18vh;
`;

const RatingButtonContainer = styled.button`
  background-color: #e6e6e6;
  border: solid 1px #e6e6e6;
  padding: 10px;
  border-radius: 10px;
  width: 20vw;
  cursor: pointer;
  transition: 0.5s; 
  margin-top: 0h; 
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;

   &:hover {
    background-color: #4a4aff;
    color: white;
    transform: scale(1.01);
   }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #262727;
  font-size: 200%;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border: solid black 1px;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
  text-shadow: 0px 3px 5px rgba(1, 1, 1, 1);
  max-width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-top: -20px;
`; 

const TitleInBox = styled.p`
  font-size: 170%;
  font-weight: bold;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const DescriptionTitle = styled.h2`
    color: black;
    font-size: 140%;
    text-align: left;
    font-family: Arial;
    font-weight: bold;
`;

  const DescriptionBorder = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: solid black 2px;
    border-radius: 10px;
    margin-bottom: 1%;
    max-width: 90%;
    padding: 1%;
    background-color: rgba(74, 74, 255, 0.2);
  `;


const Plakat = styled.img`
  border-radius: 10px;
  opacity: 1;
  box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
  width: 150%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 1;
  width: 60%;
  
`;


const Infos = styled.div`
    text-align: left;
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    border: 2px solid black;
    padding: 1%;
    max-width:90%;
    margin-bottom: 10px;
    border-radius: 10px;
    height: flex;
    align-items: stretch;

`;
    const RatingBorder = styled.div `
    display: flex;
    border: solid black 2px;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1%;
    position: relative;
    max-width: 90%;
    `;

    const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
`;

    const Rating = styled.div`
    background-color: white;  
    padding: 15px;  
    border-bottom: solid black 1px;

    &:nth-child(odd) {
      background-color: rgba(74, 74, 255, 0.2);
    }
`; 
  
    const Ratingp = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    `;

  export const FilmDetails = () => {

  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const { setShowRatingSurvey } = useContext(FilmContext);

  useEffect(() => {
  fetch(`http://localhost/IUProjekt/Projekt/src/FilmDetails/FilmDetails.php?id=${id}`)
  .then((response) => response.json())
  .then(data => {  
    setFilm(data[0]);
  }) 
      
},[id]);

return (
  <MainContainer>
    <Title>{film.name}</Title>  
    <CentralBackground>
      <LeftContainer>
        <div>
          <TitleInBox>{film.name}</TitleInBox>
          <DescriptionBorder>
          <DescriptionTitle>Movie Description:</DescriptionTitle>
          <p>{film.description}</p>
          </DescriptionBorder>
          <Infos>
            <p>Release Year:  {film.releaseYear}</p> 
            <p>Director:      {film.director}</p> 
            <p>Duration:      {film.duration} min.</p> 
          </Infos>
          <RatingButtonContainer onClick={() => setShowRatingSurvey(true)}>
            Make Rating
          </RatingButtonContainer>
          
          
          <InsertNewRating filmId={id}/>
        </div>

        <RatingBorder>
        <RatingContainer>
          {film.ratings && film.ratings.map(rating => (<Rating key={rating.id}>
            <Ratingp>Rating: {rating.rating}/5</Ratingp>
            <Ratingp>Comment: {rating.comment}</Ratingp>
          </Rating>))}
        </RatingContainer>
        </RatingBorder>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          {film.movieposter
            ? <Plakat src={`data:image/jpeg;base64,${film.movieposter}`} alt="Filmplakat" />
            : <p>no picture available</p>
          }
        </ImageContainer> 
      </RightContainer>
    </CentralBackground>
  </MainContainer>
)
}