import styled from "styled-components";

const Tudo = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
    align-items: center;

    .titulos{
        text-align: center;
        align-items: center;
    }
`

const Titulos = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`

const Container = styled.div`
    border-radius: 5px;
    border: solid 1px black;

    display: grid;
    flex-direction: row;
    column-gap: 1em;

    margin: 5px;
    border: 3px solid #8257e6;
    margin: 0 auto;
    width: 50%;
    
`;

const Simbolo = styled.span`
    font-weight: bolder;
    color: red;
`;

const Descricao = styled.span`
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 1.5em;
`;

const Momento = styled.span`
    font-family: monospace;
`;

export { Container, Simbolo, Descricao, Momento , Tudo , Titulos};