import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";

const Sobre = () => (
    <>
    <Menu />
    <h1>Chamados</h1>
    <h2>Chamados abertos</h2>
    <Cartao 
        simb={""}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"T"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"L"}
        data={"05/03/1995"}
    />
    <h2>Chamados fechados</h2>
    <Cartao 
        simb={""}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"T"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"L"}
        data={"05/03/1995"}
    />
    </>
);


export default Sobre;