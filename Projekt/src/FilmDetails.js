import styled from "styled-components"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Title = styled.h1`
  color: red;
  font-size: 75px;
  text-align: center;
  background-color: grey;
  border-radius: 3px;
  padding: 10px;
  display: block;
  font-family: Arial;
`; 

const DescriptionTitle = styled.h2`
    color: blanchedalmond;
    font-size: 50px;
    text-align: center;
    font-family: Arial;
`;

const RatingHeader = styled.h3`
    text-align: right;
    font-family: Arial;
    font-size: 30px;
`;

const TextonSite = styled.p `
    text-align: center;
    font-family: Arial;
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
`;
const Textarea = styled.textarea`
    float: right;
    border-radius: 5px;
    
`
  
  export const FilmDetails = () => {

  const { id } = useParams();
  const [film, setFilm] = useState([]);



  useEffect(() => {
  fetch(`http://localhost/IUProjekt/Projekt/src/FilmDetails.php?id=${id}`)
  .then((response) => response.json())
  .then(data => {
      setFilm(data[0]);
      console.log(data)
  }) 
},[id]);

    return (
      <>
  <Title>{film.name}</Title>                                
  <DescriptionTitle>Movie Description</DescriptionTitle>                          
  <TextonSite>{film.description}<br/>        
  Lorem Ipsum <br/>
  Lorem Ipsum</TextonSite>


       <ImageContainer>
        <Plakat
          src="https://ih1.redbubble.net/image.3403824752.9898/fposter,small,wall_texture,square_product,600x600.jpg"
          alt="Film-Plakat von Django Unchained. Zu sehen sind Jamie Foxx, Christoph Waltz und Leonardo DiCaprio"
        />
      </ImageContainer>
  

  
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <RatingHeader>Bewertung schreiben:</RatingHeader>
  <Textarea rows="5" cols="45"></Textarea>
  
  <div class="dropdown">
      <span><img width="40" height="30" src="../public/backbutton.png" alt=""/></span>
      <div class="dropdown-content">
        <button>Go back</button>
        <button>Go back to homepage</button>
      </div>
    </div>
    </>
    )
}
