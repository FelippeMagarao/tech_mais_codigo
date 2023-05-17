import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import "../pages/style.css";
import logo from './minha_foto.jpg';


function Suporte() {
  return (
  <div className="Suporte">
    <Menu />
    <header className="Suporte-logo">
      <img src={logo} className="Suporte-logo" alt="logo" />
    </header>
    <body className='Suporte-area'>
      <h1>Suporte TechMais</h1>
      <p>Email</p>  
      <h2>suporte@techmais.com</h2>     
      <p>Telefone</p>
      <h2>(21)9999-8888 /  (11) 98769-5555</h2> 
      <p>Horário de funcionamento: 24h</p>              
    </body>
    <footer className='footer'>
      <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
    </footer>
  </div>
);
}

export default Suporte;