import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Login</Link>    
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Chamados">Chamados</Link>
        <Link to="/Abertura">Abrir chamado</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/painel">Painel Administrativo</Link>
        <Link to="/suporte">Suporte</Link>
        
    </MeuNav>
);

export default Menu;