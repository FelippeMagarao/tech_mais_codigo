import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao> Responsável pela abertura / Descrição do chamado / Gravidade / Contato 
        </Descricao>
        <Momento>{ props.data }</Momento>
    </Container>
);

export default Cartao;