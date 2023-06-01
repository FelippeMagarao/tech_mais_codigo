import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";


const Chamados = () => (
    <Tudo>
    <Menu />
    <h1 class="titulos">Chamados</h1>
    <h2 class="titulos">Chamados abertos</h2>
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"05/03/1995"}
    />


<h2 class="titulos">Chamados pendentes</h2>
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"05/03/1995"}
    />

    <h2 class="titulos">Chamados fechados</h2>
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"⚠️ Gravidade"}
        data={"30/01/2002"}
    />
        <Cartao 
        simb={"⚠️ Gravidade"}
        data={"30/01/2002"}
    />

    <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
    </footer>

    </Tudo>
    
);
export default Chamados;
