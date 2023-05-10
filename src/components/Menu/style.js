import styled from "styled-components";

const MeuNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    background-color: white;
    color: black;
    font-size: larger;

    a {
        text-decoration: none;
    }
`;

export { MeuNav };