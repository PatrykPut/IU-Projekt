import styled from "styled-components";

const OpacityContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 1;
    display: none;
`;

const SurveyContainer = styled.div`
    height: 50%;
    width: 20%;
    background-color: lightblue;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Survey = () => {
    return (
        <OpacityContainer>
            <SurveyContainer>
            <textarea placeholder="Comment"></textarea>
            <input placeholder="Rating"></input>
            <button>Submit</button>
        </SurveyContainer>
        </OpacityContainer>
    )
}