import logo from './minha_foto.jpg';
import Menu from '../components/Menu/Menu';
import { Botao } from '../components/Cartao/style';

function Senha() {
    return (
    <div className="Senha">
      <Menu />
      <header className="Senha-logo">
        <img src={logo} className="Senha-logo" alt="logo" />
      </header>
      <body className='Senha-area'>
        <h1> Recuperação de senha</h1>
        <p>Insira seu email</p> 
        <input className='input' type='email'></input>        
        <p>Insira sua nova Senha</p> 
        <input className='input' type='password'></input> 
        <Botao>Criar nova senha</Botao>
                
      </body>
      <footer className='footer'>
        <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}

export default Senha;