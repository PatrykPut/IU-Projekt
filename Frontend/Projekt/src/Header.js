import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: green;
    width: 100vw;
    height: 100px;

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

//einzelne Komponenten wie diese werden so definiert und dann an die App.js weitergegeben