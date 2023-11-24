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
  height: 40vh;
  width: 20vw;
  padding: 10px;
  border-radius: 20px;
  border-color: solid black 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 1s;
  background-color:lightgrey;
  background-image: linear-gradient(to right, rgba(70,130,180,0.25) 0%, rgba(85,140,195,0.25) 20%, rgba(100,149,237,0.25) 40%, rgba(75,175,210,0.25) 50%, rgba(64,224,208,0.25) 60%, rgba(0,191,255,0.25) 80%, rgba(70,130,180,0.25) 100%);
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(1, 1, 1, 1);
  text-shadow: 0px 3px 10px rgba(1, 1, 1, 1);
`;

const Leave = styled.button`
  height: min-content;
  width: 1.5vw;
  background-color: #ffffff;
  font-size: 1vw;
  cursor: pointer;
  position: relative;
  left: 4vw;
  border-radius: 10px;
  border: solid black 0.1px;
  color: #a1a1a1;
  
  &:hover {
    background-color: #FF5630;
    color: white;
  }
`;

const InputRating = styled.input`
  height: 3vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    transform: scale(1.01);
   }
`;

const InputComment = styled.textarea`
  height: 6vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
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
    transform: scale(1.01);
  }
`;

export const InsertNewRating = ({ filmId }) => {

  const { showRatingSurvey, setShowRatingSurvey, setComment, setRating, comment, rating } = useContext(FilmContext);

  const SubmitRating = async () => {

    if (comment.length == 0 || (rating < 1 || rating > 5)) {
      alert("Geben sie gültige Werte ein")
    } 
    else {
      try {
        const response = await fetch('http://localhost/IUProjekt/Projekt/src/FilmDetails/InsertNewRating.php', {
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
      setShowRatingSurvey(false);
      } catch (error) {
        console.error('There has been a problem with the fetch: ' + error)
      } 
    };
    }

    return (
        <div>
            <OpacityContainer show={showRatingSurvey}>
              <SurveyContainer>
                <h2>Rate the game</h2>
                <Leave onClick={() => setShowRatingSurvey(false)}>x</Leave>
                <InputComment placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)}/>
                <InputRating type="number" placeholder="Rating 1-5" value={rating} onChange={e => setRating(e.target.value)}/>
                <Submit onClick={SubmitRating}>Submit Rating</Submit>
              </SurveyContainer>
            </OpacityContainer>
        </div>
    );
}