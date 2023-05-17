import React from "react";
import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import { Tudo } from "../components/Cartao/style";
import "../pages/style.css";

const Suporte = () => (
  <Tudo>
    <Menu />
    <h1 className="titulos">Suporte</h1>
    <h2 className="titulos">Horário de funcionamento</h2>
    <Cartao simb="Telefone" />
    <Cartao simb="Email" />
    <Cartao simb="Chat" />
  </Tudo>
);

export default Suporte;