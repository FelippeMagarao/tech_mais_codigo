import { Container, Descricao, Momento, Simbolo, Botao2 } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao> 
            Responsável pela abertura   /   Descrição do chamado   /  Criticidade   /   Contato 
        </Descricao>
        <Momento>{ props.data }</Momento>
        <Botao2>Mais informações</Botao2>
    </Container>
);

export default Cartao;