import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import "../pages/style.css";
import logo from './minha_foto.jpg';


function Sobre() {
  return (
  <div className="Suporte">
    <Menu />
    <header className="Suporte-logo">
      <img src={logo} className="Suporte-logo" alt="logo" />
    </header>
    <body className='Suporte-area'>
      <h1>Sobre a TechMais</h1>
      <p>Nossos objetivos</p>  
      <p>Nossa equipe</p>
      <h5>Empresa  tech  renomada  no  mercado.<br/>
Somos desenvolvimento, criatividade e inovação!<br/> Trabalhamos em conceitos baseados em Design Thinking e metodologias agéis.<br/> Utilizamos as ferramentas de codificação mais atualizadas do mercado.<br/> Implementamos Designs de interfaces adaptáveis.</h5>
      <p>Horário de funcionamento: 24h</p>              
    </body>
    <footer className='footer'>
      <p>Desenvolvido por @Techmais. Todos os direitos reservados. </p>
    </footer>
  </div>
);
}

export default Sobre;
