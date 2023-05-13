import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";


const suporte = () => (
    <Tudo>
    <Menu />
    <h1 class="titulos">Suporte</h1>
    <h2 class="titulos">Horário de funcionamento</h2>
    <Cartao 
        simb={"Telefone"}
    />
    <Cartao 
        simb={"Email"}
    />
    <Cartao 
        simb={"Chat"}
    />
    </Tudo>
);
export default suporte;
