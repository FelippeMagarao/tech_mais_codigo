import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/login">Login</Link>
        <Link to="/sobre">Chamados</Link>
        <Link to="/abertura">Abrir chamado</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/suporte">Suporte</Link>
        <Link to="/trabalhe">Painel Administrativo</Link>
        
    </MeuNav>
);

export default Menu;