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
   }
`;

const Title = styled.h1`
  color: red;
  font-size: 75px;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  font-family: Arial;
`; 

const DescriptionTitle = styled.h2`
    color: blanchedalmond;
    font-size: 50;
    text-align: center;
    font-family: Arial;
`;

const TextonSite = styled.p`
text-align: center;
    font-family: Arial;
    font-size: 25px;
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
        <Infos>
            <p>Release Year: {film.releaseYear}</p>
            <p>Director: {film.director}</p>
            <p>Duration: {film.duration}</p>
        </Infos>              
        <DescriptionTitle>Film Beschreibung</DescriptionTitle>                          
        <TextonSite>{film.description}</TextonSite>
        <BackButton onClick={''}>   
          Go Back
        </BackButton>
        <br/>
        <RatingButtonContainer onClick={() => setShowRatingSurvey(true)}>
          Make Rating
        </RatingButtonContainer>
        <InsertNewRating filmId={id}/>
      </MainContainer>
  )
}