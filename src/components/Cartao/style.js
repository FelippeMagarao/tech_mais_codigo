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
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 60rem;
    margin-top: 15px;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.1);
`;

const Simbolo = styled.span`
    font-weight: bolder;
    text-align: left;
    color: #f18535;
    margin-right: 10px;
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
    font-weight: bold;
    margin-left: 10px;
    color: #02288b;
`;

const Botao = styled.button`
    padding: 10px;
    border-radius: 10px;
    margin: 10px;`

const Botao2 = styled.button`
    margin-left: 10px;
    margin-bottom: 4px;
`

export { Container, Simbolo, Descricao, Momento , Tudo , Titulos, Botao, Botao2};