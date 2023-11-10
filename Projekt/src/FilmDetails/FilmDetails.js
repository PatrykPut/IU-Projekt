import styled from "styled-components"; 
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Survey } from "./Survey";
import { FilmContext } from "../Context/FilmContext";

const MainContainer = styled.div`
  position: relative;
  top: 22vh;
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
    font-size: 50px;
    text-align: center;
    font-family: Arial;
`;

const RatingInput = styled.button`
    border-radius: 10px;
    font-size: 20px;
    border: none;
    background-color: lightblue;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: blue;
      color: white;
    }
`;

const TextonSite = styled.p`
text-align: center;
    font-family: Arial;
    font-size: 25px;
`;

const Plakat = styled.img`
  width: 200px;
  position: absolute;
  top: 10px;
  right: 20px;
  border-radius: 10px;
  opacity: 0.99;
`;
const ImageContainer = styled.div`
  position: relative;
  text-align: right;
  top: 25px;
  right: 20px;
  border-radius: 10px;
  opacity: 0.99;
`;
  
  export const FilmDetails = () => {

  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const { setShowSurvey } = useContext(FilmContext);

  useEffect(() => {
  fetch(`http://localhost/IUProjekt/Projekt/src/FilmDetails/FilmDetails.php?id=${id}`)
  .then((response) => response.json())
  .then(data => {
    console.log("Received data:", data);  
    setFilm(data[0]);
     
    console.log(data)
  }) 
      
},[id]);

  return (
    
      <MainContainer>
        <Title>{film.name}</Title>                                
        <DescriptionTitle>Film Beschreibung</DescriptionTitle>                          
        <TextonSite>{film.description}</TextonSite>

        <ImageContainer>
          {film.movieposter
            ? <Plakat src={`data:image/jpeg;base64,${film.movieposter}`} alt="Filmplakat" />
            : <p>Kein Bild verfügbar</p>
            }
        </ImageContainer>

        <RatingButtonContainer onClick={() => setShowSurvey(true)}>
            Make Rating
        </RatingButtonContainer>

        <Survey filmId={id}/>
  
        <div Name="dropdown">
          <span><img width="40" height="30" src="../public/backbutton.png" alt=""/></span>
          <div Name="dropdown-content">
          <button>Go back</button>
          <button>Go back to homepage</button>
        </div>
        </div>
      </MainContainer>
  )
}