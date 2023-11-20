import styled from "styled-components";
import { useContext } from "react";
import { FilmContext } from "../Context/FilmContext";

const OpacityContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0 ,0 ,0 , 0.7); 
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 1s, visibility 1s;
`;

const SurveyContainer = styled.div`
  height: 60vh;
  width: 20vw;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 1s;
  background-color: lightblue;
`;

const Leave = styled.button`
  height: min-content;
  width: 1.5vw;
  background-color: #ffffff;
  font-size: 1vw;
  cursor: pointer;
  position: relative;
  left: 4.3vw;
  border-radius: 10px;
  border: none;
  color: #a1a1a1;

  &:hover {
    background-color: #FF5630;
    color: white;
  }
`;

const Input = styled.input`
  height: 3vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
`;

const InputDescription = styled.textarea`
  height: 6vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
`;

const Submit = styled.button`
  height: 3vh; 
  width: 80%; 
  cursor: pointer;
  border: none; 
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const InsertNewFilm = ({ filmId }) => {

  const { showFilmSurvey, setShowFilmSurvey, name, releaseYear, duration, director, description, setName, setReleaseYear, setDuration, setDirector, setDescription } = useContext(FilmContext);

  const SubmitRating = async () => {

    if(name.length == 0 ||
       releaseYear.length == 0 || 
       duration.length == 0 ||
       director.length == 0 ||
       description.length == 0
      ) 
    {
        alert("Füllen sie alle Felder aus")
    }
      else {
      try {
        const response = await fetch('http://localhost/IUProjekt/Projekt/src/HomePage/InsertNewFilm.php', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          name: name,
          releaseYear: releaseYear,
          duration: duration,
          director: director,
          description: description,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setShowFilmSurvey(false);
      } catch (error) {
        console.error('There has been a problem with the fetch: ' + error)
      } 
    };
  }

    return (
        <div>
            <OpacityContainer show={showFilmSurvey}>
              <SurveyContainer>
                <h2>Enter New Film</h2>
                <Leave onClick={() => setShowFilmSurvey(false)}>x</Leave>
                <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder="Release Year" value={releaseYear} onChange={e => setReleaseYear(e.target.value)}/>
                <Input placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)}/>
                <Input placeholder="Director" value={director} onChange={e => setDirector(e.target.value)}/>
                <InputDescription placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
                <Submit onClick={SubmitRating}>Enter Film</Submit>
              </SurveyContainer>
            </OpacityContainer>
        </div>
    );
}