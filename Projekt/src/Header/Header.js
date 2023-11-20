import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    background-image: linear-gradient(rgba(171, 171, 171, 0.1) 0%, rgba(134, 134, 134, 0.1) 10%, rgba(100, 100, 101, 0.1) 50% , rgba(134, 134, 134, 0.1) 90%, rgba(171, 171, 171, 0.1)), url('/HeaderDesign.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height: 10%;
    width: 100%;
    background-size: 100% 750%;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    justify-content: left;
    opacity: 1;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    top: 0;
`;

const Title = styled(Link)`
  text-decoration: none;
  color: white;
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
                <Title to="/">
                <h1>
                Filmbibliothek 
                </h1>
                </Title>
        </HeaderContainer>
    )
}