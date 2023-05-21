import logo from './minha_foto.jpg';
import '../pages/style.css'
import Menu from '../components/Menu/Menu';
import Dropdown from '../pages/dropdown'; 
import { Botao } from '../components/Cartao/style';

function Abertura() {
    return (
    <div className="Login">
      <Menu />
      <header className="Login-logo">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>
      <body className='Login-area'>
        <h1>Abertura de chamados</h1>
        <Dropdown />

        <p>Descrição do problema</p> 
        <input type='text'></input> 

        <p>Criticidade / SLA</p> 
        <input type='text'></input> 
        
        <p>Responsável pela abertura</p> 
        <input type='text'></input> 

        <p>Data de abertura</p> 
        <input type='date'></input> 
        <p></p>
        <Botao>Enviar</Botao>
        <Botao>Descartar</Botao>
                
      </body>
      <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Abertura;


