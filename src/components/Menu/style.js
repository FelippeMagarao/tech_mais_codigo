import styled from "styled-components";

const MeuNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;
    color: white;
    font-size: larger;
    background-color: #02288b;
    padding: 10px;

    a {
        text-decoration: none;
        color: white;
    }
`;

export { MeuNav };