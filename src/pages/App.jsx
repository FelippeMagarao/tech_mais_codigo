import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Botao } from '../components/Cartao/style';
import Senha from '../pages/senha'; 
import { Link } from "react-router-dom";
import { AppStyle } from "./style";


function Login() {
    return (
      <AppStyle>
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
            <Link to="/Senha">Esqueci minha senha</Link>

            <Botao>Entrar</Botao>
                    
          </body>
          <footer className='footer'>
            <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
          </footer>
        </div>
    </AppStyle> 
  );
}

export default Login;