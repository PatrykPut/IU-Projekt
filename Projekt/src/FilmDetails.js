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
  <h2>Movie Description</h2>                          
  <p>{film.description}<br/>        
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
