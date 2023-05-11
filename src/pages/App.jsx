import logo from './minha_foto.jpg';
import './App.css';
import Menu from '../components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gerenciador de chamados TechMais ©
        </p>
      </header>
    </div>
  );
}

export default App;
