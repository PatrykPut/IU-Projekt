import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: green;
    width: 100vw;
    height: 100px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>
                Filmbibliothek
            </h1>
        </HeaderContainer>
    )
}

//einzelne Komponenten wie diese werden so definiert und dann an die App.js weitergegeben