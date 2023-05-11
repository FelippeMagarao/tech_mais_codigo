import styled from "styled-components";

const MeuNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    background-color: darkgray;
    color: white;
    font-size: larger;
    background-color: black;

    a {
        text-decoration: none;
        color: white;
    }
`;

export { MeuNav };