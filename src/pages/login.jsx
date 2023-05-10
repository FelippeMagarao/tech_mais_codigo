import logo from './minha_foto.jpg';
import './login.css';
import Menu from '../components/Menu/Menu';
import Link from './Chamados';

function Login() {
    return (
    <div className="Login">
      <Menu />
      <header className="Login-logo">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>
      <body className='Login-area'>
        <h1>Login - Credenciais de acesso</h1>
        <p>Login</p> 
        <input type='email'></input>        
        <p>Senha</p> 
        <input type='password'></input> 
        <p>Esqueci minha senha</p>
        <button>Entrar</button>
                
      </body>
      <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Login;