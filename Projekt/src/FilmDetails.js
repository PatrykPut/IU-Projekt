import styled from "styled-components"; 
import { useState, useEffect } from "react";

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

export const FilmDetails = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
  fetch('http://localhost/IUProjekt/Projekt/src/FilmDetails.php')
  .then((response) => response.json())
  .then(data => {
      console.log(data);
      setFilms(data);
  }) 
},[]);

    return (
      <>
  <Title>Movie Title</Title>                                
  <h2>Movie Description</h2>                          
  <p>Beschreibung des Filmes. Lorem Ipsum <br/>        
  Lorem Ipsum <br/>
  Lorem Ipsum</p>
 
  <img class="Film-Plakat" src="https://ih1.redbubble.net/image.3403824752.9898/fposter,small,wall_texture,square_product,600x600.jpg" alt="Film-Plakat von Django Unchained. Zu sehen sind Jamie Foxx, Christoph Waltz und Leonardo DiCaprio"/>
  
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <h3>Bewertung schreiben:</h3>
  <textarea class="bewertungsbox" name="bewertungen" id="bewertungen" cols="60" rows="5"></textarea>
  
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
