import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Login</Link>    
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/chamados">Chamados</Link>
        <Link to="/abertura">Abrir chamado</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/trabalhe">Painel Administrativo</Link>
        <Link to="/suporte">Suporte</Link>
        
    </MeuNav>
);

export default Menu;