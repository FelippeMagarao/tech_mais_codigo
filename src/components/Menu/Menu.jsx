import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/login">Área do Cliente</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/parcerias">Parcerias</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/trabalhe">Trabalho Conosco</Link>
        
    </MeuNav>
);

export default Menu;