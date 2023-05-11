import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";


const Chamados = () => (
    <Tudo>
    <Menu />
    <h1 class="titulos">Chamados</h1>
    <h2 class="titulos">Chamados abertos</h2>
    <Cartao 
        simb={"Urgente"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"Mediano"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"Leve"}
        data={"05/03/1995"}
    />

<h2 class="titulos">Chamados pendentes</h2>
    <Cartao 
        simb={"Urgente"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"Mediano"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"Leve"}
        data={"05/03/1995"}
    />

    <h2 class="titulos">Chamados fechados</h2>
    <Cartao 
        simb={"Urgente"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"Mediano"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"Leve"}
        data={"05/03/1995"}
    />
    </Tudo>
);
export default Chamados;