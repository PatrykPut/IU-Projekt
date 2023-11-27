import styled from "styled-components"; 
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { InsertNewRating } from "./InsertNewRating";
import { FilmContext } from "../Context/FilmContext";

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
  margin-top: 1vh; 

   &:hover {
    background-color: #4a4aff;
    color: white;
    transform: scale(1.1);
   }
`;

const Title = styled.h1`
  color: #262727;
  font-size: 75px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  font-family: Arial;
  text-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
`; 

const DescriptionTitle = styled.h2`
    color: black;
    font-size: 50;
    text-align: center;
    font-family: Arial;
    background-color: #DCDCDC;
    border: 2px solid black;
    padding: 10px;
    max-width:20%;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
    opacity: 0.75;

`;

const TextonSite = styled.p`
  	text-align: center;
    font-family: Arial;
    font-size: 25px;
    background-color: #DCDCDC;
    border: 2px solid black;
    padding: 1%;
    max-width:55%;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
    opacity: 0.75;
`;

const Plakat = styled.img`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 1;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 1;
  
`;
const BackButton = styled.button`
background-color: #e6e6e6;
border: solid 1px #e6e6e6;
padding: 10px;
border-radius: 10px;
width: 20vw;
cursor: pointer;
transition: 0.5s; 
margin-top: 1vh; 

 &:hover {
  background-color: #4a4aff;
  color: white;
 }
`;

const Infos = styled.div`
    text-align: left;
    font-family: Arial;
    font-size: 25px;
    font-weight: bold;
    background-color: #DCDCDC;
    border: 2px solid black;
    padding: 1%;
    max-width:15%;
    margin-left: auto;
    border-radius: 5px;
    display: block;
    box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
    opacity: 0.75;
`;

    const RatingContainer = styled.div`
    display: flex;
    width: 50vw;
    justify-content: space-between;
`;

    const Rating = styled.div`
    background-color: white;  
    padding: 15px;  
    border-radius: 10px;
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

        <ImageContainer>
          {film.movieposter
            ? <Plakat src={`data:image/jpeg;base64,${film.movieposter}`} alt="Filmplakat" />
            : <p>Kein Bild verfügbar</p>
            }
        </ImageContainer> 
        <br></br>      
        <DescriptionTitle>Film Beschreibung</DescriptionTitle> 
        <br></br>                         
        <TextonSite>{film.description}</TextonSite>
        <Infos>
            <p>Release Year: {film.releaseYear}</p>
            <p>Director: {film.director}</p>
            <p>Duration: {film.duration}</p>
        </Infos>         
        <BackButton onClick={''}>   
          Go Back
        </BackButton>
        <br/>
        <RatingButtonContainer onClick={() => setShowRatingSurvey(true)}>
          Make Rating
        </RatingButtonContainer>
        <InsertNewRating filmId={id}/>
        <RatingContainer>
          {film.ratings && film.ratings.map(rating => (<Rating key={rating.id}>
            <p>Bewertung: {rating.rating}</p>
            <p>Kommentar: {rating.comment}</p>
          </Rating>))}
        </RatingContainer>
      </MainContainer>
  )
}