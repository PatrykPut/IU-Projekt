import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-image: linear-gradient(navy, white);
    height: 10%;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    border-radius: 5px;
    justify-content: left;
`;

const Film = styled.img`
    height: 50%;
    margin-left: 20px;

`;

const Title = styled.h1`
  color: black;
  font-size: 100%;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  font-family: Arial;
  cursor: pointer;
`; 

export const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                <h1 onClick={'../src/index.js'}>
                Filmbibliothek 
                </h1>
                </Title>
            <Film src='film.png'/>
        </HeaderContainer>
    )
}