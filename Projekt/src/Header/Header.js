import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 100%;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  font-family: Arial;
  cursor: pointer;

  &:hover {
    color: white;
  }
`; 

export const Header = () => {
    return (
        <HeaderContainer>
                <Title to="/">
                <h1>
                Filmbibliothek 
                </h1>
                </Title>
            <Film src='film.png'/>
        </HeaderContainer>
    )
}