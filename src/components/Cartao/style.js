import styled from "styled-components";

const Tudo = styled.div`
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
    flex-direction: row;
    column-gap: 1em;
    margin: 5px;
    margin: 0 auto;
    width: 50%;
    
`;

const Simbolo = styled.span`
    font-weight: bolder;
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