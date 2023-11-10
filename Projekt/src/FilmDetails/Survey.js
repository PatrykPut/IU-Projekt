import styled from "styled-components";
import { useContext, useState } from "react";
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
  height: 40vh;
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

const InputRating = styled.input`
  height: 2vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
`;

const InputComment = styled.textarea`
  height: 8vh;
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

export const Survey = ({ filmId }) => {

  const { showSurvey, setShowSurvey, setComment, setRating, comment, rating } = useContext(FilmContext);

  const SubmitRating = async () => {

    try {
      const response = await fetch('http://localhost/IUProjekt/Projekt/src/FilmDetails/ReceiveSubmit.php', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        comment: comment,
        rating: rating,
        filmId: filmId,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    setComment('');
    setRating('');
    setShowSurvey(false);
    } catch (error) {
      console.error('There has been a problem with the fetch: ' + error)
    } 
  };

    return (
        <div>
            <OpacityContainer show={showSurvey}>
                <SurveyContainer>
            <h2>Rate the game</h2>
            <Leave onClick={() => setShowSurvey(false)}>x</Leave>
            <InputComment placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)}/>
            <InputRating type="number" placeholder="Rating 1-5" value={rating} onChange={e => setRating(e.target.value)}/>
            <Submit onClick={SubmitRating}>Submit Rating</Submit>
            </SurveyContainer>
            </OpacityContainer>
        </div>
    );
}