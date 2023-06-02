import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Botao } from '../components/Cartao/style';

function Dashboard() {
    return (
    <div className="Login">
      <Menu />
       <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Dashboard;