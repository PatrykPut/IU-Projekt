import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: green;
    height: 15vh;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
`;

const Film = styled.img`
    height: 50%;
    margin-left: 20px;

`;

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>
                Filmbibliothek 
            </h1>
            <Film src='film.png'/>
        </HeaderContainer>
    )
}