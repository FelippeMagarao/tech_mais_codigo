import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';

function Login() {
    return (
    <div className="Login">
      <Menu />
      <header className="Login-logo">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>
      <body className='Login-area'>
        <h1>Login - Credenciais</h1>
        <p>Login</p> 
        <input className='input' type='email'></input>        
        <p>Senha</p> 
        <input className='input' type='password'></input> 
        <p>Esqueci minha senha</p>
        <button className='botao'>Entrar</button>
                
      </body>
      <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Login;